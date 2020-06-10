// const Complex = require('../src/js/complex');
import Complex from '../src/js/complex';

export const stringValueTestsData = [
  {
    in: new Complex(4, 3),
    expectedResult: '4 + 3i'
  },
  {
    in: new Complex(0, 3),
    expectedResult: '3i'
  },
  {
    in: new Complex(25, 0),
    expectedResult: '25'
  }
];

export const opData = [
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
    expectedResult: "i"
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
  },
  {
    in: new Complex(3, -2),
    op: "div",
    param: new Complex(0, 1),
    expectedResult: "-2 - 3i"
  }
];
