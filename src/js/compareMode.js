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
  stopButton.disabled = false;
  startButton.disabled = true;

  let start, stop = 0;
  //Shows is worker busy
  const workersStatus = {
    class: false,
    proto: false,
    plain: false
  }
  const workerMsgHandler = (ctx, imp, e) => {
    const { isWorking, belongs } = e.data;
    workersStatus[imp] = isWorking;
    if(belongs === 0) {
      ctx.fillStyle = '#82b1ff';
      ctx.fillRect(e.data.x, e.data.y, 1, 1);
    } else {
      ctx.fillStyle = `hsl(240, ${belongs*0.5}%, ${belongs + 10}%)`;
      ctx.fillRect(e.data.x, e.data.y, 1, 1);
    }
    if(!isWorking) {
      stop = Date.now();
      const diff = (stop - start) / 1000;
      setStat(imp, diff);
    }
    const clw = workersStatus.class;
    const prw = workersStatus.proto;
    const plw = workersStatus.plain;
    //If all workers not in work
    if(!clw && !prw && !plw) {
      console.log('Work donwe!');
      stopButton.disabled = true;
      startButton.disabled = false;
    } 
  };
  const workers = {};
  for(const imp of implementations) {
    const { canvas, ctx }= canvases[imp];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    workers[imp] = new Worker();
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
