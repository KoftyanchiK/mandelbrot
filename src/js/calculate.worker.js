import Debug from 'debug';
import { classBelongsToMandelSet } from './lib/classImplementation';
import { protoBelongsToMandelSet } from './lib/protoImplementation';
import { plainBelongsToMandelSet } from './lib/plainImplementation';

const debug = Debug('fractals:worker');

let isWorking = false;
self.addEventListener('message', (e) => {
  switch(e.data.cmd) {
    case 'start':
      start(e.data);
      break;
    case 'stop':
      stop();
      break;
    default:
      self.postMessage(e.data);
  }
}, false);

const start = (opts) => {
  isWorking = true;
  run(opts);
};

const stop = () => {
  isWorking = false;
  self.postMessage({ isWorking: isWorking });
  self.close();
};

const implementations = {
  class: classBelongsToMandelSet,
  proto: protoBelongsToMandelSet,
  plain: plainBelongsToMandelSet
};

function run(opts) {
  let { width, height } = opts;
  const {
    magFactor, panX, panY, iterations, implementation, treshold
  } = opts;
  if(opts.compareMode === true) {
    width = opts.compWidth;
    height = opts.compHeight;
  }
  console.log(`Running worker for ${implementation}`);
  const belongsFn = implementations[implementation];
  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      const belongs = belongsFn(x / magFactor - panX,
        y / magFactor - panY, iterations, treshold);
      ((x >= width - 1) && (y >= height - 1)) ?
        stop() :
        self.postMessage({ belongs, x, y, isWorking });
    }
  }
};
