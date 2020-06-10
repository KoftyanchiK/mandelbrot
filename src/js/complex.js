import Debug from 'debug';

const debug = Debug('fractals:complex');
const debugAdd = Debug('fractals:complex:add');
const debugSub = Debug('fractals:complex:sub');
const debugMul = Debug('fractals:complex:mul');
const debugDiv = Debug('fractals:complex:div');
const debugParse = Debug('fractals:complex:parse');
const debugStringValue = Debug('fractals:complex:stringValue');

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
export default class Complex {
  constructor(...args) {
    const tmp = parse(...args);
    this.re = tmp.re;
    this.im = tmp.im;
  }
  static print(complex) {
    console.log(`${complex.re} + ${complex.im}i`);
  }
  static getStringValue(complex) {
    let re = '';
    if(complex.re !== 0)
      re += complex.re;
    let im = null;
    switch(complex.im) {
      case 0:
        return `${complex.re}`;
      case 1:
      case -1:
        im = '';
        break;
      default:
        im = Math.abs(complex.im);
    }
    debugStringValue('Imaginary part is: %O', im);
    return `${re}${complex.im > 0 ? ' +' : ' -'} ${im}i`;
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
      debugDiv('Complex in division: ', Complex.getStringValue(complex));
      debugDiv('this: ', Complex.getStringValue(this));
      debugDiv('Reciprocal of this: ', Complex.getStringValue(this.getReciprocal()));
      const res = {};
      res.re = (this.re * complex.re + this.im * complex.im) / (Math.pow(complex.re, 2) + Math.pow(complex.im, 2));
      res.im = (this.im * complex.re - this.re * complex.im) / (Math.pow(complex.re, 2) + Math.pow(complex.im, 2));
      const result = new Complex(res);
      debugDiv('Result: %O', result);
      return result;
    }
  }
  getReciprocal() {
    const result = {};
    result.re = this.re / (this.re * this.re + this.im * this.im);
    result.im = -(this.im / (this.re * this.re + this.im * this.im));
    return new Complex(result);
  }
};
