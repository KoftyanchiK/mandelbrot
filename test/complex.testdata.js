// const Complex = require('../src/js/complex');
import Complex from '../src/js/complex';

export const data = [
  {
    in: new Complex(4, 3),
    op: 'add',
    param: new Complex(-3, -2),
    expectedResult: '1 + i'
  },
  {
    in: new Complex(0, 3),
    op: "add",
    param: new Complex(0, -2),
    expectedResult: "0 + i"
  },
  {
    in: new Complex(4, 2),
    op: "div",
    param: new Complex(1, 1),
    expectedResult: "3 - i"
  },
  {
    in: new Complex(25, 0),
    op: "div",
    param: new Complex(3, -4),
    expectedResult: "3 + 4i"
  }
];
