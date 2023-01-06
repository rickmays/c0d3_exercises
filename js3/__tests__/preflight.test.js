// fn will be an object with all your preflight solutions
const fn = require("../preflight.js");

describe("mergeArrays function", () => {
  it("should merge 2 arrays of strings", () => {
    const arr1 = ["Rattata", "Raticate"];
    const arr2 = ["Bulbasaur", "Ivysaur", "Venusaur"];
    const result = fn.mergeArrays(arr1, arr2);
    expect(result).toEqual([
      "Rattata",
      "Raticate",
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
    ]);
  });
  it("should merge two arrays of numbers", () => {
    const result = fn.mergeArrays([9, 3, 5], [10]);
    expect(result).toEqual([9, 3, 5, 10]);
  });
  it("should merge an empty array", () => {
    const result = fn.mergeArrays(["Pikachu", "Raichu"], []);
    expect(result).toEqual(["Pikachu", "Raichu"]);
  });
});

describe("firstLongerThan function", () => {
  it("should find a string in the middle of an array", () => {
    const arr = ["Ekans", "Arbok", "Pikachu", "Raichu"];
    const result = fn.firstLongerThan(arr, 5);
    expect(result).toEqual("Pikachu");
  });
  it("should find a string at the end of an array", () => {
    const arr = ["Caterpie", "Metapod", "Butterfree"];
    const result = fn.firstLongerThan(arr, 9);
    expect(result).toEqual("Butterfree");
  });
  it("should find the first string longer than 0", () => {
    const result = fn.firstLongerThan(["a", "b", "c"], 0);
    expect(result).toEqual("a");
  });
  it("should return undefined", () => {
    const result = fn.firstLongerThan([], 5);
    expect(result).toEqual(undefined);
  });
});
