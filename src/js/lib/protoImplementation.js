import Complex from './proto';

export const protoBelongsToMandelSet = (x, y, iterations, treshold) => {
  const initial = new Complex(x, y);
  let r = initial;
  for(let i = 0; i < iterations; i++) {
    r = r.mul(r).add(initial);
    if (r.re * r.im > treshold)
      return (i / iterations * 100); // In the Mandelbrot set
  }
  return 0; // Not in the set
}
