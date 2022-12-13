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

allFuns.selectiveZero = selectiveZero;
module.exports = allFuns;
