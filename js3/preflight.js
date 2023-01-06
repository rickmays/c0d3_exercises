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

allFuns.mergeArrays = mergeArrays;
allFuns.firstLongerThan = firstLongerThan;

module.exports = allFuns;
