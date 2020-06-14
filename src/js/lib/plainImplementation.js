export const plainBelongsToMandelSet = (x, y, iterations) => {
  let real = x;
  let imaginary = y;
  for(let i = 0; i < iterations; i++) {
    // Calculate the real and imaginary components of the result separately
    const tempReal = real * real
      - imaginary * imaginary + x;
    const tempImaginary = 2 * real * imaginary + y;
    real = tempReal;
    imaginary = tempImaginary;
    if (real * imaginary > treshold)
      return (i / iterations * 100); // In the Mandelbrot set
  }
  return 0;  // Not in the set
}