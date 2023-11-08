const every = (array: number[], test: (num: number) => boolean): boolean => {
  for (let i of array) {
    if (!test(i)) {
      return false;
    }
  }
  return true;
};

const everySome = (array: number[], test: (num: number) => boolean): boolean => {
  return !array.some((element) => !test(element));
};

console.log(everySome([1, 3, 5], (n) => n < 10));
console.log(everySome([2, 4, 16], (n) => n < 10));
console.log(everySome([], (n) => n < 10));
