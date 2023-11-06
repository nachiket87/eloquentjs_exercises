interface ObjectType {
  [propName: string]: any;
}
export const deepEqual = (a: any, b: any): boolean => {
  if (typeof a !== "object" && typeof b !== "object") {
    return a === b;
  } else if (a === null || b === null) {
    return a === b;
  } else {
    return compareObject(a, b);
  }
};

const compareObject = (a: ObjectType, b: ObjectType): boolean => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i < aKeys.length; i++) {
    const valueChecker = deepEqual(a[aKeys[i]], b[bKeys[i]]);
    if (valueChecker === false) {
      return false;
    }
  }
  return true;
};
