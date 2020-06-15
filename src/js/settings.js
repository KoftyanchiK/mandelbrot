const openSettingsBtn = document.getElementById('openSettings');
const settings = document.getElementById('settings');
const applySettingsBtn = document.getElementById('applySettings');

const magFactorInput = document.getElementById('magFactor');
const iterationsInput = document.getElementById('iterations');
const panXInput = document.getElementById('panX');
const panYInput = document.getElementById('panY');
const tresholdInput = document.getElementById('treshold');

// Constants
const CANVAS_WIDTH = document.documentElement.clientWidth;
const CANVAS_HEIGHT = document.documentElement.clientHeight;
const MAGNIFICATION_FACTOR = 200;
const PAN_X = 4;
const PAN_Y = 2;
const ITERATIONS = 100;
const TRESHOLD = 5;

const options = {
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  magFactor: MAGNIFICATION_FACTOR,
  iterations: ITERATIONS,
  panX: PAN_X,
  panY: PAN_Y,
  treshold: TRESHOLD
};

openSettingsBtn.addEventListener('click', () => {
  settings.style.display = 'block';
  header.style.display = 'none';
});
applySettingsBtn.addEventListener('click', () => {
  settings.style.display = 'none';
  header.style.display = 'block';
});

magFactorInput.addEventListener('change', changeEventHandler.bind(this, 'magFactor'));
iterationsInput.addEventListener('change', changeEventHandler.bind(this, 'iterations'));
panXInput.addEventListener('change', changeEventHandler.bind(this, 'panX'));
panYInput.addEventListener('change', changeEventHandler.bind(this, 'panY'));
tresholdInput.addEventListener('change', changeEventHandler.bind(this, 'treshold'));

function changeEventHandler(field, e) {
  options[field] = e.target.value;
}

export function getOpts() {
  return options;
}
