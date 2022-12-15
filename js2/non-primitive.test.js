const fn = require("./non-primitive.js");

describe("selectiveZero function", () => {
  it("should change multiple instances of the input number to 0", () => {
    const arr = [5, 2, 2, 9];
    fn.selectiveZero(arr, 2);
    expect(arr).toEqual([5, 0, 0, 9]);
  });
  it("should return an empty array", () => {
    const arr = [];
    const result = fn.selectiveZero(arr, 3);
    expect(result).toEqual(arr);
  });
  it("should not modify an array with no matches", () => {
    const arr = [8, 9, 1, "I'm a string"];
    const original = [...arr];
    fn.selectiveZero(arr, 6);
    expect(arr).toEqual(original);
  });
});
describe("largest function", () => {
  it("should find the largest of 3 numbers", () => {
    const result = fn.largest([5, 3, 9]);
    expect(result).toEqual(9);
  });
  it("should find the largest of 4 negative numbers", () => {
    const result = fn.largest([-20, -2, -5, -10]);
    expect(result).toEqual(-2);
  });
  it("should return undefined on an empty array", () => {
    expect(fn.largest([])).toEqual(undefined);
  });
});

describe("firstXToZero function", () => {
  it("should change 3 numbers to 0", () => {
    const result = fn.firstXToZero([0, 5, 9, 6], 3);
    expect(result).toEqual([0, 0, 0, 6]);
  });
  it("should not modify the array when changing 0 elements", () => {
    const result = fn.firstXToZero(["Don't", "change", "me"], 0);
    expect(result).toEqual(["Don't", "change", "me"]);
  });
  it("should change all to zero when X beyond array length", () => {
    const result = fn.firstXToZero([1, 2, 3], 4);
    expect(result).toEqual([0, 0, 0]);
  });
});
