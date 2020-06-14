webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calculate_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate.worker */ "./src/js/calculate.worker.js");
/* harmony import */ var _calculate_worker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_calculate_worker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);





const debug = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:main')

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
  worker = new _calculate_worker__WEBPACK_IMPORTED_MODULE_1___default.a();
  if(selectedValue === '') {
    Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showModal"])('No implementation selected', 'Please, select implementation to draw mandelbrot set');
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
    Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showModal"])(`Time: ${(stop - start) / 1000} seconds`);
    stopButton.disabled = true;
    startButton.disabled = false;
  }
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDYztBQUNKO0FBQ1Y7O0FBRTFCLGNBQWMsNENBQUs7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQU07QUFDckI7QUFDQSxJQUFJLHdEQUFTO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEMsQ0FBQzs7QUFFRDtBQUNBLFNBQVMscUJBQXFCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwyQkFBMkIsYUFBYSxJQUFJLFFBQVEsS0FBSyxRQUFRO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLHdEQUFTLFVBQVUsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uNzRkMDU4MmRlMjNkNzNkNTVkYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgV29ya2VyIGZyb20gJy4vY2FsY3VsYXRlLndvcmtlcic7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoJ2ZyYWN0YWxzOm1haW4nKVxuXG4vLyBDb25zdGFudHNcbmNvbnN0IENBTlZBU19XSURUSCA9IDUwMDtcbmNvbnN0IENBTlZBU19IRUlHSFQgPSA1MDA7XG5jb25zdCBNQUdOSUZJQ0FUSU9OX0ZBQ1RPUiA9IDkwMDtcbmNvbnN0IFBBTl9YID0gMDtcbmNvbnN0IFBBTl9ZID0gMDtcbmNvbnN0IElURVJBVElPTlMgPSAxMDA7XG5cbi8vIENyZWF0ZSBjYW52YXNcbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY2FudmFzLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG5hcHAuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyBFbGVtZW50c1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbmNvbnN0IHN0b3BCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcCcpO1xuY29uc3QgaW1wU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcFNlbGVjdCcpO1xuY29uc3QgaW1wU2VsZWN0SW5zdGFuY2UgPSBNLkZvcm1TZWxlY3QuaW5pdChpbXBTZWxlY3QpO1xuXG5zdG9wQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuaW1wU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gIGltcFNlbGVjdC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xufSk7XG5cbmxldCB3b3JrZXIgPSBudWxsO1xubGV0IHN0YXJ0LCBzdG9wID0gMDtcbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gaW1wU2VsZWN0LnZhbHVlO1xuICB3b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gIGlmKHNlbGVjdGVkVmFsdWUgPT09ICcnKSB7XG4gICAgc2hvd01vZGFsKCdObyBpbXBsZW1lbnRhdGlvbiBzZWxlY3RlZCcsICdQbGVhc2UsIHNlbGVjdCBpbXBsZW1lbnRhdGlvbiB0byBkcmF3IG1hbmRlbGJyb3Qgc2V0Jyk7XG4gIH0gZWxzZSB7XG4gICAgaWYod29ya2VyKSB7XG4gICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHdvcmtlck1zZ0hhbmRsZXIpO1xuICAgIH1cbiAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHdvcmtlck1zZ0hhbmRsZXIsIGZhbHNlKTtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgY21kOiAnc3RhcnQnLFxuICAgICAgd2lkdGg6IENBTlZBU19XSURUSCxcbiAgICAgIGhlaWdodDogQ0FOVkFTX0hFSUdIVCxcbiAgICAgIG1hZ0ZhY3RvcjogTUFHTklGSUNBVElPTl9GQUNUT1IsXG4gICAgICBpdGVyYXRpb25zOiBJVEVSQVRJT05TLFxuICAgICAgcGFuWDogUEFOX1gsXG4gICAgICBwYW5ZOiBQQU5fWSxcbiAgICAgIGltcGxlbWVudGF0aW9uOiBzZWxlY3RlZFZhbHVlXG4gICAgfSk7XG4gICAgc3RhcnQgPSBEYXRlLm5vdygpO1xuICB9XG59KTtcblxuc3RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHdvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogJ3N0b3AnIH0pO1xufSk7XG5cbmNvbnN0IHdvcmtlck1zZ0hhbmRsZXIgPSAoZSkgPT4ge1xuICBjb25zdCB7IGlzV29ya2luZywgYmVsb25ncyB9ID0gZS5kYXRhO1xuICBpZihiZWxvbmdzID09PSAwKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwwLDApJztcbiAgICBjdHguZmlsbFJlY3QoZS5kYXRhLngsIGUuZGF0YS55LCAxLCAxKTtcbiAgfSBlbHNlIHtcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke2JlbG9uZ3MqMC41Mn0sICR7YmVsb25nc30lLCAke2JlbG9uZ3N9JSlgO1xuICAgIGN0eC5maWxsUmVjdChlLmRhdGEueCwgZS5kYXRhLnksIDEsIDEpO1xuICB9XG4gIGlmKGlzV29ya2luZykge1xuICAgIHN0b3BCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzdGFydEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3RvcCA9IERhdGUubm93KCk7XG4gICAgc2hvd01vZGFsKGBUaW1lOiAkeyhzdG9wIC0gc3RhcnQpIC8gMTAwMH0gc2Vjb25kc2ApO1xuICAgIHN0b3BCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=