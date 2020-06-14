import Debug from 'debug';
import Worker from './calculate.worker';
import { showModal } from './modal';
import '../css/style.css';

const debug = Debug('fractals:main')

// Constants
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const MAGNIFICATION_FACTOR = 200;
const PAN_X = 2;
const PAN_Y = 1.5;
const ITERATIONS = 100;
const TRESHOLD = 5;

// Create canvas
const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
app.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const impSelect = document.getElementById('impSelect');
const impSelectInstance = M.FormSelect.init(impSelect);

stopButton.disabled = true;

impSelect.addEventListener('change', function (e) {
  impSelect.value = e.target.value;
});

let worker = null;
let start, stop = 0;
startButton.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const selectedValue = impSelect.value;
  worker = new Worker();
  if(selectedValue === '') {
    showModal('No implementation selected', 'Please, select implementation to draw mandelbrot set');
  } else {
    if(worker) {
      worker.removeEventListener('message', workerMsgHandler);
    }
    worker.addEventListener('message', workerMsgHandler, false);
    worker.postMessage({
      cmd: 'start',
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      magFactor: MAGNIFICATION_FACTOR,
      iterations: ITERATIONS,
      panX: PAN_X,
      panY: PAN_Y,
      implementation: selectedValue,
      treshold: TRESHOLD
    });
    start = Date.now();
  }
});

stopButton.addEventListener('click', (e) => {
  worker.terminate();
  stopButton.disabled = true;
  startButton.disabled = false;
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
