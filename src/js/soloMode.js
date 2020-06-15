import { getOpts } from './settings';
import Worker from './calculate.worker';
import { showModal } from './modal';

export function runSolo() {
  // Elements
  const canvas = document.getElementById('soloCanvas');
  const ctx = canvas.getContext('2d');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const impSelect = document.getElementById('impSelect');
  const impSelectInstance = M.FormSelect.init(impSelect, {classes: 'importantSelect'});

  stopButton.disabled = true;

  impSelect.addEventListener('change', function (e) {
    impSelect.value = e.target.value;
  });
  const workerMsgHandler = (e) => {
    const { isWorking, belongs } = e.data;
    if(belongs === 0) {
      ctx.fillStyle = '#82b1ff';
      ctx.fillRect(e.data.x, e.data.y, 1, 1);
    } else {
      ctx.fillStyle = `hsl(240, ${belongs*0.5}%, ${belongs + 10}%)`;
      ctx.fillRect(e.data.x, e.data.y, 1, 1);
    }
    if(isWorking) {
      stopButton.disabled = false;
      startButton.disabled = true;
    } else {
      stop = Date.now();
      showModal(`${impSelect.options[impSelect.options.selectedIndex].text} computed.`, `Elapsed time: ${(stop - start) / 1000} seconds`);
      stopButton.disabled = true;
      startButton.disabled = false;
    }
  }

  let worker = null;
  let start, stop = 0;
  // startButton.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, getOpts().width, getOpts().height);
  const selectedValue = impSelect.value;
  worker = new Worker();
  if(worker) {
    worker.removeEventListener('message', workerMsgHandler);
  }
  worker.addEventListener('message', workerMsgHandler, false);
  const options = Object.assign(getOpts(), {
    cmd: 'start',
    implementation: selectedValue
  });
  worker.postMessage(options);
  start = Date.now();
  // });

  stopButton.addEventListener('click', () => {
    worker.terminate();
    stopButton.disabled = true;
    startButton.disabled = false;
  });


};
