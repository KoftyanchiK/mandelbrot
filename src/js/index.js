import Debug from 'debug';
import Worker from './calculate.worker';
import { showModal } from './modal';
import '../css/style.css';

const debug = Debug('fractals:main')

// Constants
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const MAGNIFICATION_FACTOR = 900;
const PAN_X = 0;
const PAN_Y = 0;
const ITERATIONS = 100;

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
      implementation: selectedValue
    });
    start = Date.now();
  }
});

stopButton.addEventListener('click', (e) => {
  worker.postMessage({ cmd: 'stop' });
});

const workerMsgHandler = (e) => {
  const { isWorking, belongs } = e.data;
  if(belongs === 0) {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(e.data.x, e.data.y, 1, 1);
  } else {
    ctx.fillStyle = `hsl(${belongs*0.52}, ${belongs}%, ${belongs}%)`;
    ctx.fillRect(e.data.x, e.data.y, 1, 1);
  }
  if(isWorking) {
    stopButton.disabled = false;
    startButton.disabled = true;
  } else {
    stop = Date.now();
    showModal(`Time: ${(stop - start) / 1000} seconds`);
    stopButton.disabled = true;
    startButton.disabled = false;
  }
}
