export const reverseArray = (array: Array<number | string>): Array<number | string> => {
  let endIndex = array.length - 1;
  let newArray = array;
  for (let index = 0; index < endIndex; index++) {
    const tempValue = newArray[index];
    newArray[index] = newArray[endIndex];
    newArray[endIndex] = tempValue;
    endIndex--;
  }
  return newArray;
};
