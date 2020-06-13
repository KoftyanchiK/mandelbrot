import Debug from 'debug';
import ClassImpWorker from './workers/classImp.worker';
import ProtoImpWorker from './workers/protoImp.worker';
import PlainImpWorker from './workers/plainImp.worker';
import '../css/style.css';

const debug = Debug('fractals:main')

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const MAGNIFICATION_FACTOR = 600;
const PAN_X = 0;
const PAN_Y = 0;
const ITERATIONS = 10;

const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
app.appendChild(canvas);
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';


const impSelect = document.getElementById('impSelect');
let impSelectInstance = M.FormSelect.init(impSelect, {});

const workers = {
  class: new ClassImpWorker(),
  proto: new ProtoImpWorker(),
  plain: new PlainImpWorker()
}

let worker = workers.class;

impSelect.addEventListener('change', async (e) => {
  const selectedValue = e.target.value;
  worker.removeEventListener('message', () => {
    connsole.log('removed');
  });
  worker = workers[selectedValue];
  worker.addEventListener('message', function(e) {
    console.log('Worker said: ', e.data);
  }, false);
});

// function runImplementation(implementation) {
//   const belongsFunc = belongFunctions[implementation];
//   for(let x = 0; x < CANVAS_WIDTH; x++) {
//     for(let y = 0; y < CANVAS_HEIGHT; y++) {
//       const belongs = belongsFunc(x / MAGNIFICATION_FACTOR - PAN_X,
//         y / MAGNIFICATION_FACTOR - PAN_Y);
//       // debug(`Pixel (${x},${y}) belongs to Mandelbrot set: ${belongs}`);
//       ctx.fillStyle = 'rgb(0,0,0)';
//       if(belongs)
//         ctx.fillRect(x, y, 1, 1);
//     }
//   }
// }



// const protoBelongsToMandelSet = (x, y) => {
//   return true;
// }

// const plainBelongsToMandelSet = (x, y) => {
//   var realComponentOfResult = x;
//   var imaginaryComponentOfResult = y;

//   for(let i = 0; i < ITERATIONS; i++) {
//     // Calculate the real and imaginary components of the result
//     // separately
//     var tempRealComponent = realComponentOfResult * realComponentOfResult
//       - imaginaryComponentOfResult * imaginaryComponentOfResult + x;

//     var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;
//     realComponentOfResult = tempRealComponent;
//     imaginaryComponentOfResult = tempImaginaryComponent;
//   }

//   if (realComponentOfResult * imaginaryComponentOfResult < 5)
//     return true; // In the Mandelbrot set

//   return false; // Not in the set
// }

