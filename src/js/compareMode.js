import { getOpts } from './settings';
import Worker from './calculate.worker';
import { showModal } from './modal';
import { setStat } from './stat';
import config from './config';

export function runCompare() {
  const implementations = config.implementations;
  const canvases = {};
  for(const imp of implementations) {
    const canvas = document.getElementById(`${imp}Canvas`);
    const ctx = canvas.getContext('2d');
    canvases[imp] = { canvas, ctx };
  }

  // Elements
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');

  stopButton.disabled = true;
  let start, stop = 0;
  const workerMsgHandler = (ctx, imp, e) => {
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
      showModal(`${imp} computed.`, `Elapsed time: ${(stop - start) / 1000} seconds`);
      stopButton.disabled = true;
      startButton.disabled = false;
    }
  }
  const workers = {};
  for(const imp of implementations) {
    const { canvas, ctx }= canvases[imp];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    workers[imp] = new Worker();
    console.log(workers[imp]);
    if(workers[imp]) {
      workers[imp].removeEventListener('message', workerMsgHandler.bind(this, canvases[imp].ctx, imp));
    }
    workers[imp].addEventListener('message', workerMsgHandler.bind(this, canvases[imp].ctx, imp), false);
    const options = Object.assign(getOpts(), {
      cmd: 'start',
      implementation: imp
    });
    workers[imp].postMessage(options);
  }
  start = Date.now();

  stopButton.addEventListener('click', () => {
    for(const imp of implementations) {
      workers[imp].terminate();
    }
    stopButton.disabled = true;
    startButton.disabled = false;
  });
};
