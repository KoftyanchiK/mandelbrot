/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/complex.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/complex.js":
/*!***************************!*\
  !*** ./src/js/complex.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Complex; });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);


const debug = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:complex');
const debugAdd = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:complex:add');
const debugSub = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:complex:sub');
const debugMul = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:complex:mul');
const debugDiv = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:complex:div');
const debugParse = debug__WEBPACK_IMPORTED_MODULE_0___default()('fractals:complex:parse');

function parse(a, b) {
  debugParse('a: ', a, 'b: ', b);
  debugParse(`Type of 'a' param: ${typeof a}`);
  if (a === undefined || a === null) {
    z['re'] = 0;
    z['im'] = 0;
  } else {
    switch (typeof a) {
      case 'object':
        return {re: a.re, im: a.im};
      case 'string':
        throw 'Parse string complex nunmber must be implemented in parse function';
      case 'number':
        return {re: a, im: b};
      default:
        return {re: 0, im: 0};
    }
  }
}
class Complex {
  constructor(...args) {
    const tmp = parse(...args);
    this.re = tmp.re;
    this.im = tmp.im;
  }
  static print(complex) {
    console.log(`${complex.re} + ${complex.im}i`);
  }
  static getStringValue(complex) {
    let ret = '';
    
    let im = null;
    switch(complex.im) {
      case 0:
      case 1:
        im = '';
        break;
      default:
        im = Math.abs(complex.im);
    }
    let sign = '';

    return `${complex.re} ${complex.im > 0 ? '+' : '-'} ${im}i`;
  }
  static isEqual(complex) {
    return this.re === complex.re && this.im === complex.im;
  }
  getStringValue() {
    return Complex.getStringValue(this);
  }
  setRe(value) {
    this.re = value;
  }
  getRe() {
    return this.re;
  }
  setIm(value) {
    this.im = value;
  }
  getIm() {
    return this.im;
  }
  add(complex) {
    const result = {};
    debugAdd(`Add ${Complex.getStringValue(this)} + ${Complex.getStringValue(complex)}`);
    result.re = this.re + complex.re;
    result.im = this.im + complex.im;
    return new Complex(result);
  }
  sub(complex) {
    debugSub(`Sub ${Complex.getStringValue(this)} - ${Complex.getStringValue(complex)}`);
    const result = {};
    result.re = this.re - complex.re;
    result.im = this.im - complex.im;
    debugSub(`Result %O`, result);
    return new Complex(result);
  }
  mul(complex) {
    debugMul(`Mul ${Complex.getStringValue(this)} * ${Complex.getStringValue(complex)}`);
    const res = {};
    res.re = this.re * complex.re - this.im * complex.im;
    res.im = this.re * complex.im + this.im * complex.re;
    const result = new Complex(res);
    debugMul(`Result %O`, result);
    return result;
  }
  div(complex) {
    debugDiv(`Div ${Complex.getStringValue(this)} / ${Complex.getStringValue(complex)}`);
    // const result = {};
    if (complex.im === 0) 
      return new Complex(this.re / complex.re, this.im / complex.re);
    else {
      const c = new Complex(complex);
      debugDiv('Complex in division: ', Complex.getStringValue(complex));
      debugDiv('this: ', Complex.getStringValue(this));
      debugDiv('Reciprocal of this: ', Complex.getStringValue(this.getReciprocal()));
      const result = c.mul(this.getReciprocal());
      return new Complex(result);
    }
  }
  getReciprocal() {
    const result = {};
    result.re = this.re / (this.re * this.re + this.im * this.im);
    result.im = - (this.im / (this.re * this.re + this.im * this.im));
    return new Complex(result);
  }
};


/***/ }),

/***/ "./test/complex.test.js":
/*!******************************!*\
  !*** ./test/complex.test.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _complex_testdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex.testdata */ "./test/complex.testdata.js");
/* harmony import */ var _src_js_complex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/complex */ "./src/js/complex.js");
/* harmony import */ var mocha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mocha */ "mocha");
/* harmony import */ var mocha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mocha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chai */ "chai");
/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_3__);
// const data = require('./complex.testdata');
// const Complex = require('../src/js/complex');
// const {it} = require('chai');




const should = chai__WEBPACK_IMPORTED_MODULE_3___default.a.should();

Object(mocha__WEBPACK_IMPORTED_MODULE_2__["describe"])('Complex numbers class', () => {
  _complex_testdata__WEBPACK_IMPORTED_MODULE_0__["data"].forEach(test => {
    const input = test.in;
    const operation = test.op;
    const parameter = test.param;
    const expectedResult = test.expectedResult;
    Object(mocha__WEBPACK_IMPORTED_MODULE_2__["it"])(`${input.getStringValue()} ${operation} ${parameter.getStringValue()} equals to ${expectedResult}`, (done) => {
      const textResult = _src_js_complex__WEBPACK_IMPORTED_MODULE_1__["default"].getStringValue(input[operation](parameter));
      textResult.should.eql(expectedResult);
      done();
    });
  });
});

/***/ }),

/***/ "./test/complex.testdata.js":
/*!**********************************!*\
  !*** ./test/complex.testdata.js ***!
  \**********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _src_js_complex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/complex */ "./src/js/complex.js");
// const Complex = require('../src/js/complex');


const data = [
  {
    in: new _src_js_complex__WEBPACK_IMPORTED_MODULE_0__["default"](4, 3),
    op: 'add',
    param: new _src_js_complex__WEBPACK_IMPORTED_MODULE_0__["default"](-3, -2),
    expectedResult: '1 + i'
  },
  {
    in: new _src_js_complex__WEBPACK_IMPORTED_MODULE_0__["default"](0, 3),
    op: "add",
    param: new _src_js_complex__WEBPACK_IMPORTED_MODULE_0__["default"](0, -2),
    expectedResult: "0 + i"
  }
];


/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "mocha":
/*!************************!*\
  !*** external "mocha" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jb21wbGV4LnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jb21wbGV4LnRlc3RkYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vY2hhXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUIsY0FBYyw0Q0FBSztBQUNuQixpQkFBaUIsNENBQUs7QUFDdEIsaUJBQWlCLDRDQUFLO0FBQ3RCLGlCQUFpQiw0Q0FBSztBQUN0QixpQkFBaUIsNENBQUs7QUFDdEIsbUJBQW1CLDRDQUFLOztBQUV4QjtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVcsS0FBSyxXQUFXO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFdBQVcsR0FBRywyQkFBMkIsR0FBRyxHQUFHO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkIsS0FBSyxnQ0FBZ0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkIsS0FBSyxnQ0FBZ0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCLEtBQUssZ0NBQWdDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCLEtBQUssZ0NBQWdDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLFVBQVUsR0FBRztBQUM2QjtBQUNGO0FBQ0g7QUFDYjtBQUN4QixlQUFlLDJDQUFJOztBQUVuQixzREFBUTtBQUNSLEVBQUUsc0RBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQUUsSUFBSSx1QkFBdUIsR0FBRyxVQUFVLEdBQUcsMkJBQTJCLGFBQWEsZUFBZTtBQUN4Ryx5QkFBeUIsdURBQU87QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFDd0M7O0FBRWpDO0FBQ1A7QUFDQSxZQUFZLHVEQUFPO0FBQ25CO0FBQ0EsZUFBZSx1REFBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBLFlBQVksdURBQU87QUFDbkI7QUFDQSxlQUFlLHVEQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6Im1haW4udGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9jb21wbGV4LnRlc3QuanNcIik7XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnZGVidWcnO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKCdmcmFjdGFsczpjb21wbGV4Jyk7XG5jb25zdCBkZWJ1Z0FkZCA9IERlYnVnKCdmcmFjdGFsczpjb21wbGV4OmFkZCcpO1xuY29uc3QgZGVidWdTdWIgPSBEZWJ1ZygnZnJhY3RhbHM6Y29tcGxleDpzdWInKTtcbmNvbnN0IGRlYnVnTXVsID0gRGVidWcoJ2ZyYWN0YWxzOmNvbXBsZXg6bXVsJyk7XG5jb25zdCBkZWJ1Z0RpdiA9IERlYnVnKCdmcmFjdGFsczpjb21wbGV4OmRpdicpO1xuY29uc3QgZGVidWdQYXJzZSA9IERlYnVnKCdmcmFjdGFsczpjb21wbGV4OnBhcnNlJyk7XG5cbmZ1bmN0aW9uIHBhcnNlKGEsIGIpIHtcbiAgZGVidWdQYXJzZSgnYTogJywgYSwgJ2I6ICcsIGIpO1xuICBkZWJ1Z1BhcnNlKGBUeXBlIG9mICdhJyBwYXJhbTogJHt0eXBlb2YgYX1gKTtcbiAgaWYgKGEgPT09IHVuZGVmaW5lZCB8fCBhID09PSBudWxsKSB7XG4gICAgelsncmUnXSA9IDA7XG4gICAgelsnaW0nXSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlb2YgYSkge1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuIHtyZTogYS5yZSwgaW06IGEuaW19O1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgdGhyb3cgJ1BhcnNlIHN0cmluZyBjb21wbGV4IG51bm1iZXIgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBwYXJzZSBmdW5jdGlvbic7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4ge3JlOiBhLCBpbTogYn07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge3JlOiAwLCBpbTogMH07XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGNvbnN0IHRtcCA9IHBhcnNlKC4uLmFyZ3MpO1xuICAgIHRoaXMucmUgPSB0bXAucmU7XG4gICAgdGhpcy5pbSA9IHRtcC5pbTtcbiAgfVxuICBzdGF0aWMgcHJpbnQoY29tcGxleCkge1xuICAgIGNvbnNvbGUubG9nKGAke2NvbXBsZXgucmV9ICsgJHtjb21wbGV4LmltfWlgKTtcbiAgfVxuICBzdGF0aWMgZ2V0U3RyaW5nVmFsdWUoY29tcGxleCkge1xuICAgIGxldCByZXQgPSAnJztcbiAgICBcbiAgICBsZXQgaW0gPSBudWxsO1xuICAgIHN3aXRjaChjb21wbGV4LmltKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW0gPSBNYXRoLmFicyhjb21wbGV4LmltKTtcbiAgICB9XG4gICAgbGV0IHNpZ24gPSAnJztcblxuICAgIHJldHVybiBgJHtjb21wbGV4LnJlfSAke2NvbXBsZXguaW0gPiAwID8gJysnIDogJy0nfSAke2ltfWlgO1xuICB9XG4gIHN0YXRpYyBpc0VxdWFsKGNvbXBsZXgpIHtcbiAgICByZXR1cm4gdGhpcy5yZSA9PT0gY29tcGxleC5yZSAmJiB0aGlzLmltID09PSBjb21wbGV4LmltO1xuICB9XG4gIGdldFN0cmluZ1ZhbHVlKCkge1xuICAgIHJldHVybiBDb21wbGV4LmdldFN0cmluZ1ZhbHVlKHRoaXMpO1xuICB9XG4gIHNldFJlKHZhbHVlKSB7XG4gICAgdGhpcy5yZSA9IHZhbHVlO1xuICB9XG4gIGdldFJlKCkge1xuICAgIHJldHVybiB0aGlzLnJlO1xuICB9XG4gIHNldEltKHZhbHVlKSB7XG4gICAgdGhpcy5pbSA9IHZhbHVlO1xuICB9XG4gIGdldEltKCkge1xuICAgIHJldHVybiB0aGlzLmltO1xuICB9XG4gIGFkZChjb21wbGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZGVidWdBZGQoYEFkZCAke0NvbXBsZXguZ2V0U3RyaW5nVmFsdWUodGhpcyl9ICsgJHtDb21wbGV4LmdldFN0cmluZ1ZhbHVlKGNvbXBsZXgpfWApO1xuICAgIHJlc3VsdC5yZSA9IHRoaXMucmUgKyBjb21wbGV4LnJlO1xuICAgIHJlc3VsdC5pbSA9IHRoaXMuaW0gKyBjb21wbGV4LmltO1xuICAgIHJldHVybiBuZXcgQ29tcGxleChyZXN1bHQpO1xuICB9XG4gIHN1Yihjb21wbGV4KSB7XG4gICAgZGVidWdTdWIoYFN1YiAke0NvbXBsZXguZ2V0U3RyaW5nVmFsdWUodGhpcyl9IC0gJHtDb21wbGV4LmdldFN0cmluZ1ZhbHVlKGNvbXBsZXgpfWApO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC5yZSA9IHRoaXMucmUgLSBjb21wbGV4LnJlO1xuICAgIHJlc3VsdC5pbSA9IHRoaXMuaW0gLSBjb21wbGV4LmltO1xuICAgIGRlYnVnU3ViKGBSZXN1bHQgJU9gLCByZXN1bHQpO1xuICAgIHJldHVybiBuZXcgQ29tcGxleChyZXN1bHQpO1xuICB9XG4gIG11bChjb21wbGV4KSB7XG4gICAgZGVidWdNdWwoYE11bCAke0NvbXBsZXguZ2V0U3RyaW5nVmFsdWUodGhpcyl9ICogJHtDb21wbGV4LmdldFN0cmluZ1ZhbHVlKGNvbXBsZXgpfWApO1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIHJlcy5yZSA9IHRoaXMucmUgKiBjb21wbGV4LnJlIC0gdGhpcy5pbSAqIGNvbXBsZXguaW07XG4gICAgcmVzLmltID0gdGhpcy5yZSAqIGNvbXBsZXguaW0gKyB0aGlzLmltICogY29tcGxleC5yZTtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGxleChyZXMpO1xuICAgIGRlYnVnTXVsKGBSZXN1bHQgJU9gLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGl2KGNvbXBsZXgpIHtcbiAgICBkZWJ1Z0RpdihgRGl2ICR7Q29tcGxleC5nZXRTdHJpbmdWYWx1ZSh0aGlzKX0gLyAke0NvbXBsZXguZ2V0U3RyaW5nVmFsdWUoY29tcGxleCl9YCk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0ge307XG4gICAgaWYgKGNvbXBsZXguaW0gPT09IDApIFxuICAgICAgcmV0dXJuIG5ldyBDb21wbGV4KHRoaXMucmUgLyBjb21wbGV4LnJlLCB0aGlzLmltIC8gY29tcGxleC5yZSk7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjID0gbmV3IENvbXBsZXgoY29tcGxleCk7XG4gICAgICBkZWJ1Z0RpdignQ29tcGxleCBpbiBkaXZpc2lvbjogJywgQ29tcGxleC5nZXRTdHJpbmdWYWx1ZShjb21wbGV4KSk7XG4gICAgICBkZWJ1Z0RpdigndGhpczogJywgQ29tcGxleC5nZXRTdHJpbmdWYWx1ZSh0aGlzKSk7XG4gICAgICBkZWJ1Z0RpdignUmVjaXByb2NhbCBvZiB0aGlzOiAnLCBDb21wbGV4LmdldFN0cmluZ1ZhbHVlKHRoaXMuZ2V0UmVjaXByb2NhbCgpKSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjLm11bCh0aGlzLmdldFJlY2lwcm9jYWwoKSk7XG4gICAgICByZXR1cm4gbmV3IENvbXBsZXgocmVzdWx0KTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVjaXByb2NhbCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQucmUgPSB0aGlzLnJlIC8gKHRoaXMucmUgKiB0aGlzLnJlICsgdGhpcy5pbSAqIHRoaXMuaW0pO1xuICAgIHJlc3VsdC5pbSA9IC0gKHRoaXMuaW0gLyAodGhpcy5yZSAqIHRoaXMucmUgKyB0aGlzLmltICogdGhpcy5pbSkpO1xuICAgIHJldHVybiBuZXcgQ29tcGxleChyZXN1bHQpO1xuICB9XG59O1xuIiwiLy8gY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vY29tcGxleC50ZXN0ZGF0YScpO1xuLy8gY29uc3QgQ29tcGxleCA9IHJlcXVpcmUoJy4uL3NyYy9qcy9jb21wbGV4Jyk7XG4vLyBjb25zdCB7aXR9ID0gcmVxdWlyZSgnY2hhaScpO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vY29tcGxleC50ZXN0ZGF0YSc7XG5pbXBvcnQgQ29tcGxleCBmcm9tICcuLi9zcmMvanMvY29tcGxleCc7XG5pbXBvcnQgeyBpdCwgZGVzY3JpYmUgfSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmNvbnN0IHNob3VsZCA9IGNoYWkuc2hvdWxkKCk7XG5cbmRlc2NyaWJlKCdDb21wbGV4IG51bWJlcnMgY2xhc3MnLCAoKSA9PiB7XG4gIGRhdGEuZm9yRWFjaCh0ZXN0ID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRlc3QuaW47XG4gICAgY29uc3Qgb3BlcmF0aW9uID0gdGVzdC5vcDtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0ZXN0LnBhcmFtO1xuICAgIGNvbnN0IGV4cGVjdGVkUmVzdWx0ID0gdGVzdC5leHBlY3RlZFJlc3VsdDtcbiAgICBpdChgJHtpbnB1dC5nZXRTdHJpbmdWYWx1ZSgpfSAke29wZXJhdGlvbn0gJHtwYXJhbWV0ZXIuZ2V0U3RyaW5nVmFsdWUoKX0gZXF1YWxzIHRvICR7ZXhwZWN0ZWRSZXN1bHR9YCwgKGRvbmUpID0+IHtcbiAgICAgIGNvbnN0IHRleHRSZXN1bHQgPSBDb21wbGV4LmdldFN0cmluZ1ZhbHVlKGlucHV0W29wZXJhdGlvbl0ocGFyYW1ldGVyKSk7XG4gICAgICB0ZXh0UmVzdWx0LnNob3VsZC5lcWwoZXhwZWN0ZWRSZXN1bHQpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcbn0pOyIsIi8vIGNvbnN0IENvbXBsZXggPSByZXF1aXJlKCcuLi9zcmMvanMvY29tcGxleCcpO1xuaW1wb3J0IENvbXBsZXggZnJvbSAnLi4vc3JjL2pzL2NvbXBsZXgnO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGluOiBuZXcgQ29tcGxleCg0LCAzKSxcbiAgICBvcDogJ2FkZCcsXG4gICAgcGFyYW06IG5ldyBDb21wbGV4KC0zLCAtMiksXG4gICAgZXhwZWN0ZWRSZXN1bHQ6ICcxICsgaSdcbiAgfSxcbiAge1xuICAgIGluOiBuZXcgQ29tcGxleCgwLCAzKSxcbiAgICBvcDogXCJhZGRcIixcbiAgICBwYXJhbTogbmV3IENvbXBsZXgoMCwgLTIpLFxuICAgIGV4cGVjdGVkUmVzdWx0OiBcIjAgKyBpXCJcbiAgfVxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9jaGFcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==