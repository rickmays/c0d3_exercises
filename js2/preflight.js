const allFuns = {};

const removeCharX = (str, index, i = 0, result = "") => {
  if (i === str.length) {
    return result;
  }
  result += i === index ? "" : str[i];
  return removeCharX(str, index, i + 1, result);
};

const less3Diff = (str1, str2, i = 0, counter = 0) => {
  // Base Case
  if (i === str1.length) {
    return counter < 3;
  }
  // Recursive Case
  if (str1[i] !== str2[i]) {
    counter += 1;
  }
  return less3Diff(str1, str2, i + 1, counter);
};

const reverso = (str, i = 0, revStr = "") => {
  // Base Case
  if (i === str.length) {
    return revStr;
  }
  // Recursive Cases
  return reverso(str, i + 1, str[i] + revStr);
};

const delayAndCall = (num, func) => {
  return () => {
    setTimeout(func, num);
  };
};

const isPrime = (num, start = 2) => {
  if (num < start) {
    return false;
  }
  if (num === start) {
    return true;
  }
  if (num % start === 0) {
    return false;
  }
  return isPrime(num, start + 1);
};

const getNextPrime = (start) => {
  if (isPrime(start)) {
    return start;
  }
  return getNextPrime(start + 1);
};

const primeMachine = (start) => {
  if (start < 2) {
    start = 1; // any number smaller than 2 is not a prime.
  }
  if (isPrime(start)) {
    start = start + 1;
  }
  return () => {
    const result = getNextPrime(start);
    start = result + 1;
    return result;
  };
};

allFuns.removeCharX = removeCharX; // You need this line for every function
allFuns.less3Diff = less3Diff;
allFuns.reverso = reverso;
allFuns.delayAndCall = delayAndCall;
allFuns.primeMachine = primeMachine;

module.exports = allFuns;
