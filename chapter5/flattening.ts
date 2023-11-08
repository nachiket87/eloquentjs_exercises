let arrays = [[1, 2, 3], [4, 5], [6]];

export const flatten = (arrays: any[][]): Array<any> => {
  return arrays.reduce((a, b) => {
    return a.concat(b);
  });
};

console.log(flatten(arrays));
