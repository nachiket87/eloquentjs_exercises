type ListOrNull = List | null;
interface List {
  value: any;
  rest: ListOrNull;
}

export const arrayToList = (array: Array<any>): ListOrNull => {
  let list: ListOrNull = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

export const listToArray = (list: ListOrNull): Array<any> => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

export const prepend = (value: any, list: ListOrNull) => {
  return { value, rest: list };
};

export const nth = (list: ListOrNull, n: number): number | undefined => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
};
