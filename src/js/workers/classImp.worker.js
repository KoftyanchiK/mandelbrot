import Complex from '../lib/complex';

let isWorking = false;

self.addEventListener('message', (e) => {
  switch(e.data) {
    case 'start':
      start();
      break;
    case 'stop':
      stop();
      break;
    case 'isWorking':
      self.postMessage(isWorking);
    default:
      self.postMessage(e.data);
  }
}, false);

const start = () => {
  isWorking = true;
  self.postMessage('Class implementation started');
}

const stop = () => {
  isWorking = false;
  self.close();
}

// const classBelongsToMandelSet = (x, y) => {
//   const result = new Complex(x, y);
//   let r = result;
//   for(let i = 0; i < ITERATIONS; i++) {
//     const tmp = r.mul(r);
//     r = r.mul(r).add(result);
//   }
//   if (r.getRe() * r.getIm() < 1)
//     return true; // In the Mandelbrot set
//   return false; // Not in the set
// }