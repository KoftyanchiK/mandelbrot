import Complex from './complex';
import Debug from 'debug';
import '../css/style.css';

window.localStorage.debug = `fractals:*,-fractals:complex:parse`;

const debug = Debug('fractals:index');

const c1 = new Complex(4, 3);
const c2 = new Complex(-3, -2);

const c3 = new Complex(4, 2);
const c4 = new Complex(1, 1);

const c5 = new Complex(3, -6);
const c6 = new Complex(0, 1);




debug(`Add: `, Complex.getStringValue(c1.add(c2)));
// debug(`Add: `, Complex.getStringValue(c1.add(c3)));
// debug(`Add: `, Complex.getStringValue(c1.add(c4)));
// debug(`Add: `, Complex.getStringValue(c1.add(c5)));
// debug(`Add: `, Complex.getStringValue(c1.add(c6)));
debug(`Mul: `, Complex.getStringValue(c5.mul(c6)));
debug(`Div: `, Complex.getStringValue(c3.div(c4)));