export const loop = (
  value: number,
  testFunction: (num: number) => boolean,
  updateFunction: (num: number) => number,
  bodyFunction: (value: any) => void
) => {
  if (!testFunction(value)) {
    return;
  } else {
    bodyFunction(value);
    loop(updateFunction(value), testFunction, updateFunction, bodyFunction);
  }
};
