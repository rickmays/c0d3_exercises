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

const isPrime = (num, i = 3, limit = Math.floor(Math.sqrt(num))) => {
  if (num === 2 || num === 3) return true;
  if (num < 2 || num % 2 === 0) return false;
  if (num % i === 0) return false;
  if (i >= limit) return true;
  return isPrime(num, (i += 2), limit);
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
module.exports = allFuns;
