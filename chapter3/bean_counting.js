const countBs = (string) => {
  return countChar(string, "B");
};

const countChar = (string, character) => {
  const lengthOfString = string.length;
  let countNachi = 0;
  for (let i = 0; i < lengthOfString; i++) {
    if (string[i] === character) {
      countNachi = countNachi + 1;
    }
  }
  return countNachi;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
