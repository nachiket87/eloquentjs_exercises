export const countBs = (string) => {
  return countChar(string, "B");
};

export const countChar = (string, character) => {
  const lengthOfString = string.length;
  let countNachi = 0;
  for (let i = 0; i < lengthOfString; i++) {
    if (string[i] === character) {
      countNachi = countNachi + 1;
    }
  }
  return countNachi;
};
