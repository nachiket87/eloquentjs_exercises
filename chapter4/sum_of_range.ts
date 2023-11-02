export const range = (
  start: number,
  end: number,
  step: number = 1
): Array<number> => {
  const array = new Array();
  if (start < end) {
    for (start; start <= end; start += step) {
      array.push(start);
    }
  } else {
    if (step > 0) {
      step = 0 - step;
    }
    for (start; start >= end; start += step) {
      array.push(start);
    }
  }
  return array;
};

export const sum = (array: Array<number>): number => {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
};
