import Complex from './complex';

export const classBelongsToMandelSet = (x, y, iterations) => {
  const result = new Complex(x, y);
  let r = result;
  for(let i = 0; i < iterations; i++) {
    r = r.mul(r).add(result);
    if (r.re * r.im > treshold)
      return (i / iterations * 100); // In the Mandelbrot set
  }
  return 0; // Not in the set
}