const allFuns = {};

const selectiveZero = (arr, num, i = 0) => {
  if (i === arr.length) {
    return arr;
  }
  if (arr[i] === num) {
    arr[i] = 0;
  }
  return selectiveZero(arr, num, i + 1);
};

const largest = (arr, i = 0, result = arr[0]) => {
  if (i === arr.length) {
    return result;
  }
  if (arr[i] > result) {
    result = arr[i];
  }
  return largest(arr, i + 1, result);
};

const firstXToZero = (arr, x, i = 0) => {
  if (i === x || i === arr.length) {
    return arr;
  }
  arr[i] = 0;
  return firstXToZero(arr, x, i + 1);
};

const isPrime = num => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  if (num < 9) return true;
  if (num % 3 === 0) return false;
  return true;
};

const allPrime = (arr, element = arr.length - 1) => {
  if (element <= 0) {
    return true;
  }
  if (!isPrime(arr[element])) {
    return false;
  }
  return allPrime(arr, element - 1);
};

const increasing = (arr, i = 1) => {
  if (i >= arr.length) {
    return true;
  }
  if (arr[i] <= arr[i - 1]) {
    return false;
  }
  return increasing(arr, i + 1);
};

const copyArray = (arr, newArr = []) => {
  if (newArr.length === arr.length) {
    return newArr;
  }
  newArr.push(arr[newArr.length]);
  return copyArray(arr, newArr);
};

const removeElement = (a, str, i = 0) => {
  if (i >= a.length) {
    return a;
  }
  if (a[i] === str) {
    a.splice(i, 1);
    i--;
  }
  return removeElement(a, str, i + 1);
};

const copyWithout = (arr, num, newArr = [], i = 0) => {
  if (i >= arr.length) {
    return newArr;
  }
  if (arr[i] !== num) {
    newArr.push(arr[i]);
  }
  return copyWithout(arr, num, newArr, i + 1);
};

const copyReverse = (arr, newArr = []) => {
  if (newArr.length === arr.length) {
    return newArr;
  }
  newArr.unshift(arr[newArr.length]);
  return copyReverse(arr, newArr);
};

const copyLast = (arr, skipNum, i = skipNum, newArr = []) => {
  if (i >= arr.length) {
    return newArr;
  }
  newArr.push(arr[i]);
  return copyLast(arr, skipNum, i + 1, newArr);
};

const copyFirst = (arr, skipNum, i = 0, newArr = []) => {
  if (i >= arr.length - skipNum) {
    return newArr;
  }
  newArr.push(arr[i]);
  return copyFirst(arr, skipNum, i + 1, newArr);
};

const runOnEach = (arr, fun, i = 0, newArr = []) => {
  if (i >= arr.length) {
    return newArr;
  }
  newArr.push(fun(arr[i], i));
  return runOnEach(arr, fun, i + 1, newArr);
};

const onlyIndex = (arrayOfArrays, index, i = 0, arrayAtIndex = []) => {
  if (i >= arrayOfArrays.length) return arrayAtIndex;
  arrayAtIndex.push(arrayOfArrays[i][index]);
  return onlyIndex(arrayOfArrays, index, i + 1, arrayAtIndex);
};

const oddToZero = arr => {
  return arr.map(el => {
    return el % 2 !== 0 ? 0 : el;
  });
};

const firstLetters = stringArray => {
  return stringArray.map(word => {
    return word[0];
  });
};

const firstXToZeroMap = (arr, x) => {
  return arr.map((el, i) => {
    if (i < x) {
      return 0;
    } else {
      return el;
    }
  });
};

const nonPrimeToZero = arr => {
  return arr.map(el => (isPrime(el) ? el : 0));
};

const append = (strArr, str) => {
  return strArr.map(el => el + str);
};

const runOnEachMap = (arr, fun) => arr.map(fun);

const clone = arr => arr.map(el => el);

const noMoreEvens = arr => arr.filter(el => el % 2 !== 0);

const removeEmpty = arr => arr.filter(el => el !== "");

const primesOnly = arr => arr.filter(el => isPrime(el));

const firstPrime = arr => arr.find(el => isPrime(el));

const sum = arr => arr.reduce((acc, el) => acc + el, 0);

const largestReduce = arr =>
  arr.reduce((result, el) => {
    if (el > result) {
      return el;
    }
    return result;
  }, arr[0]);

const longest = arr =>
  arr.reduce((acc, e) => {
    if (e.length > acc.length) {
      return e;
    }
    return acc;
  }, arr[0]);

const matches = (arr, str) =>
  arr.reduce((acc, e) => {
    if (e === str) {
      acc++;
    }
    return acc;
  }, 0);

const combineLess5 = arr =>
  arr.reduce((acc, e) => {
    if (e.length < 5) {
      acc += e;
    }
    return acc;
  }, "");

const largerThan5 = arr =>
  arr.reduce((acc, e) => {
    if (e > 5) {
      acc.push(e);
    }
    return acc;
  }, []);

const largerThan5Filter = arr =>
  arr.filter(e => {
    return e > 5;
  });

Array.prototype.getEvens = function () {
  return this.filter(e => {
    if (e % 2 === 0) {
      return e;
    }
  });
};

Array.prototype.arrSum = function () {
  if (this.length === 0) {
    return undefined;
  }
  return this.reduce((acc, e) => {
    return acc + e;
  });
};

Array.prototype.pad = function (n, str) {
  if (n <= 0) {
    return this;
  }
  this.push(str);
  return this.pad(n - 1, str);
};

Array.prototype.fizzbuzz = function (i = 0) {
  if (i >= this.length) {
    return this;
  }
  if (this[i] % 15 === 0) this[i] = "fizzbuzz";
  if (this[i] % 5 === 0) this[i] = "buzz";
  if (this[i] % 3 === 0) this[i] = "fizz";
  return this.fizzbuzz(i + 1);
};

Array.prototype.removeEvens = function (i = 0) {
  if (i >= this.length) return this;
  if (this[i] % 2 === 0) {
    this.splice(i, 1);
    return this.removeEvens(i);
  }
  return this.removeEvens(i + 1);
};

Array.prototype.getIterator = function () {
  i = -1;
  return () => {
    i = i + 1;
    return this[i % this.length];
  };
};

allFuns.selectiveZero = selectiveZero;
allFuns.largest = largest;
allFuns.firstXToZero = firstXToZero;
allFuns.allPrime = allPrime;
allFuns.increasing = increasing;
allFuns.copyArray = copyArray;
allFuns.removeElement = removeElement;
allFuns.copyWithout = copyWithout;
allFuns.copyReverse = copyReverse;
allFuns.copyLast = copyLast;
allFuns.copyFirst = copyFirst;
allFuns.runOnEach = runOnEach;
allFuns.onlyIndex = onlyIndex;
allFuns.oddToZero = oddToZero;
allFuns.firstLetters = firstLetters;
allFuns.firstXToZeroMap = firstXToZeroMap;
allFuns.nonPrimeToZero = nonPrimeToZero;
allFuns.append = append;
allFuns.runOnEachMap = runOnEachMap;
allFuns.clone = clone;
allFuns.noMoreEvens = noMoreEvens;
allFuns.removeEmpty = removeEmpty;
allFuns.primesOnly = primesOnly;
allFuns.firstPrime = firstPrime;
allFuns.sum = sum;
allFuns.largestReduce = largestReduce;
allFuns.longest = longest;
allFuns.matches = matches;
allFuns.combineLess5 = combineLess5;
allFuns.largerThan5 = largerThan5;
allFuns.largerThan5Filter = largerThan5Filter;
allFuns.getEvens = Array.prototype.getEvens;
allFuns.arrSum = Array.prototype.arrSum;
allFuns.pad = Array.prototype.pad;
allFuns.fizzbuzz = Array.prototype.fizzbuzz;
allFuns.removeEvens = Array.prototype.removeEvens;
allFuns.getIterator = Array.prototype.getIterator;

module.exports = allFuns;
