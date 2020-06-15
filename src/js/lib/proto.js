import Debug from 'debug';
import { parse } from './parse';

const debugAdd = Debug('fractals:complex:add');
const debugSub = Debug('fractals:complex:sub');
const debugMul = Debug('fractals:complex:mul');
const debugDiv = Debug('fractals:complex:div');
const debugPow = Debug('fractals:complex:pow');
const debugStringValue = Debug('fractals:complex:stringValue');

export default function Complex(...args) {
  const tmp = parse(...args);
  this.re = tmp.re;
  this.im = tmp.im;
}

Complex.prototype = {
  add: function (complex) {
    const result = {};
    // debugAdd(`Add ${Complex.getStringValue(this)} + ${Complex.getStringValue(complex)}`);
    result.re = this.re + complex.re;
    result.im = this.im + complex.im;
    return new Complex(result);
  },
  mul: function (complex) {
    // debugMul(`Mul ${Complex.getStringValue(this)} * ${Complex.getStringValue(complex)}`);
    const res = {};
    res.re = this.re * complex.re - this.im * complex.im;
    res.im = this.re * complex.im + this.im * complex.re;
    const result = new Complex(res);
    debugMul(`Result %O`, result);
    return result;
  }
}