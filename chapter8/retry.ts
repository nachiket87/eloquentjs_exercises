class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a: number, b: number): number {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a: number, b: number) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(8, 8));
// → 64
