import Debug from 'debug';
import { getOpts } from './settings';
import { runSolo } from './soloMode';
import { runCompare } from './compareMode';
import { showModal } from './modal';
import config from './config';
import '../css/style.css';

const debug = Debug('fractals:main');

localStorage.debug = 'fractals:worker';

const aboutBtn = document.getElementById('about');
const app = document.getElementById('app');
const impSelect = document.getElementById('impSelect');
const impSelectInstance = M.FormSelect.init(impSelect, {classes: 'importantSelect'});
// Create canvases
const canvas = document.createElement('canvas');
canvas.id = 'soloCanvas';
canvas.width = getOpts().width;
canvas.height = getOpts().height;
app.appendChild(canvas);
for(const imp of config.implementations) {
  const canvas = document.createElement('canvas');
  canvas.id = `${imp}Canvas`;
  canvas.style.display = 'none';
  canvas.width = getOpts().compWidth;
  canvas.height = getOpts().compHeight;
  app.appendChild(canvas);
}
const soloCanvas = document.getElementById('soloCanvas');
const classCanvas = document.getElementById('classCanvas');
const protoCanvas = document.getElementById('protoCanvas');
const plainCanvas = document.getElementById('plainCanvas');

const aboutText = `Hover over top of screen to see controls.<br />
  Press "SETTINGS" button to set parameters for next run and see statistics for last runs.<br />
  Press "ABOUT" to see this window.<br />
  To close any modal window simply click outside of this window or wait some time.<br />
  <a href='https://github.com'>This project on Github</a>
`;
aboutBtn.addEventListener('click', () => {
  showModal('About this page', aboutText, 10000);
});
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
startButton.addEventListener('click', (e) => {
  if(!getOpts().compareMode) {
    debug('Running solo mode');
    runSolo();
  } else {
    debug('Running compare mode');
    runCompare();
  }
});

if(!document.cookie) {
  showModal('Hello!', aboutText, 10000);
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  const expires = `expires=${d.toUTCString()};`;
  const cookieString = `visited=true; ${expires} path=/; sameSite=strict;`;
  document.cookie = cookieString;
}
const selectWrapper = document.getElementById('selectWrapper');
document.addEventListener('changeMode', () => {
  if(!getOpts().compareMode) {
    showModal('Running solo mode', '', 1000);
    selectWrapper.style.display = 'inline';
    soloCanvas.style.display = 'block';
    classCanvas.style.display = 'none';
    protoCanvas.style.display = 'none';
    plainCanvas.style.display = 'none';
  } else {
    showModal('Running compare mode', '', 1000);
    selectWrapper.style.display = 'none';
    soloCanvas.style.display = 'none';
    classCanvas.style.display = 'block';
    protoCanvas.style.display = 'block';
    plainCanvas.style.display = 'block';
  }
});
