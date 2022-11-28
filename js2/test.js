const reverso = (str, i = 0, j = str.length - 1, revStr = "") => {
  // Base Cases
  if (str.length <= 1) {
    return str;
  }
  if (i === str.length) {
    return revStr;
  }
  // Recursive Cases
  return reverso(str, i + 1, j - 1, revStr + str[j]);
};

const solution = reverso("sneakers");
console.log(solution);
