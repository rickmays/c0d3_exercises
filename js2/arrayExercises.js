// array with three identical strings
const threeStrings = ["hello", "hello", "hello"];
const threeFunctions = [() => {}, () => {}, () => {}];
const mixed = ["hello", () => {}, ["one", 1]];
const solution = (array) => {
  return () => {
    return array;
  };
};
console.log(solution([1, 2, 3])());
