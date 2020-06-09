// const data = require('./complex.testdata');
// const Complex = require('../src/js/complex');
// const {it} = require('chai');
import { data } from './complex.testdata';
import Complex from '../src/js/complex';
import { it, describe } from 'mocha';
import chai from 'chai';
const should = chai.should();

describe('Complex numbers class', () => {
  data.forEach(test => {
    const input = test.in;
    const operation = test.op;
    const parameter = test.param;
    const expectedResult = test.expectedResult;
    it(`${input.getStringValue()} ${operation} ${parameter.getStringValue()} equals to ${expectedResult}`, (done) => {
      const textResult = Complex.getStringValue(input[operation](parameter));
      textResult.should.eql(expectedResult);
      done();
    });
  });
});