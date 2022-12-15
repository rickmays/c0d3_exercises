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

allFuns.selectiveZero = selectiveZero;
allFuns.largest = largest;
allFuns.firstXToZero = firstXToZero;
module.exports = allFuns;
