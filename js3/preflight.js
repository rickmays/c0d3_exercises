const allFuns = {};

// My solution
// const mergeArrays = (arr1, arr2) => {
//   const newArr = arr1.concat(arr2);
//   return newArr;
// };

// c0d3 solution
const mergeArrays = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  return newArr;
};

const firstLongerThan = (arr, num) => arr.find(el => el.length > num);

const getReturnValues = funArr => {
  valArr = [];
  funArr.map(fun => {
    valArr.push(fun());
  });
  return valArr;
};

const zeroSquare = (num, i = 0, arr = []) => {
  if (i === num) {
    return arr;
  }
  arr[i] = new Array(num).fill(0);
  return zeroSquare(num, i + 1, arr);
};

allFuns.mergeArrays = mergeArrays;
allFuns.firstLongerThan = firstLongerThan;
allFuns.getReturnValues = getReturnValues;
allFuns.zeroSquare = zeroSquare;

module.exports = allFuns;
