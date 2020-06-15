import Debug from 'debug';

const debugParse = Debug('fractals:complex:parse');

export function parse(a, b) {
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