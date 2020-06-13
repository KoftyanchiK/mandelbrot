// const data = require('./complex.testdata');
// const Complex = require('../src/js/complex');
// const {it} = require('chai');
import { stringValueTestsData, opData, powData } from './complex.testdata';
import Complex from '../src/js/lib/complex';
import { it, describe } from 'mocha';
import chai from 'chai';
const should = chai.should();

describe('Complex numbers class', () => {
  stringValueTestsData.forEach(test => {
    it(`Shows string value correctly for ${JSON.stringify(test.in)} => ${test.expectedResult}`, (done) => {
      const textResult = test.in.getStringValue();
      textResult.should.eql(test.expectedResult);
      done();
    });
  });
  opData.forEach(test => {
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
  powData.forEach(test => {
    it(`Exponentiate ${test.in.getStringValue()} in ${test.param} with result: ${test.expectedResult}`, (done) => {
      const textResult = Complex.getStringValue(test.in[test.op](test.param));
      textResult.should.eql(test.expectedResult);
      done();
    });
  })
});