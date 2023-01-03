const fn = require("../non-primitive.js");

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

describe("allPrime function", () => {
  it("should return true for an array of all primes", () => {
    const result = fn.allPrime([2, 3, 17, 19]);
    expect(result).toEqual(true);
  });
  it("should return false for an array with some primes", () => {
    const result = fn.allPrime([0, 7, 11, 12]);
    expect(result).toEqual(false);
  });
  it("should return true for an empty array", () => {
    const result = fn.allPrime([]);
    expect(result).toEqual(true);
  });
});

describe("increasing function", () => {
  it("should return true for an increasing array", () => {
    const result = fn.increasing([2, 7, 9, 10]);
    expect(result).toEqual(true);
  });
  it("should return false for an array that decreases", () => {
    const result = fn.increasing([19, 13, 17, 11]);
    expect(result).toEqual(false);
  });
  it("should return false if elements are repeated", () => {
    const result = fn.increasing([2, 7, 7, 10]);
    expect(result).toEqual(false);
  });
  it("should return true for an array of one number", () => {
    const result = fn.increasing([51]);
    expect(result).toEqual(true);
  });
});

describe("copyArray function", () => {
  it("should copy an array of 3 elements", () => {
    const result = fn.copyArray([-5, -23, "study"]);
    expect(result).toEqual([-5, -23, "study"]);
  });
  it("should not modify original array", () => {
    const original = [
      "hi",
      1,
      () => {
        return 5;
      },
      "apple",
      45,
    ];
    const result = fn.copyArray(original);
    original[0] = "Drax";
    expect(result[0]).toEqual("hi");
  });
  it("should copy an empty array", () => {
    const result = fn.copyArray([]);
    expect(result).toEqual([]);
  });
});

describe("remove function", () => {
  it("should not remove anything", () => {
    const data = ["Rocket", "Groot", "Star-Lord"];
    const result = fn.removeElement(data, "Random");
    expect(result).toEqual(["Rocket", "Groot", "Star-Lord"]);
  });
  it("should remove 1 element", () => {
    const data = ["Rocket", "Groot", "Star-Lord"];
    const result = fn.removeElement(data, "Star-Lord");
    expect(result).toEqual(["Rocket", "Groot"]);
  });
  it("should remove all elements", () => {
    const data = ["Rocket", "Rocket", "Rocket"];
    const result = fn.removeElement(data, "Rocket");
    expect(result).toEqual([]);
  });
});

describe("copyWithout function", () => {
  it("should copy without 2 middle elements", () => {
    const result = fn.copyWithout([5, 2, 2, 9], 2);
    expect(result).toEqual([5, 9]);
  });
  it("should not modify original array", () => {
    const arr = [5, 2, 2, 9];
    fn.copyWithout(arr, 2);
    expect(arr).toEqual([5, 2, 2, 9]);
  });
  it("should copy without last 2 elements", () => {
    const result = fn.copyWithout([2, 2, 2, 3, 3], 3);
    expect(result).toEqual([2, 2, 2]);
  });
  it("should return identical array if no matches", () => {
    const result = fn.copyWithout([2, 6, 4], 3);
    expect(result).toEqual([2, 6, 4]);
  });
});

describe("copyReverse function", () => {
  it("should reverse copy an array of 4 elements", () => {
    const result = fn.copyReverse([1, 3, 5, 7]);
    expect(result).toEqual([7, 5, 3, 1]);
  });
  it("should not modify original array", () => {
    const arr = [1, 3, 5, 7];
    fn.copyReverse(arr);
    expect(arr).toEqual([1, 3, 5, 7]);
  });
  it("should reverse copy an array of 1 element", () => {
    const result = fn.copyReverse(["bears"]);
    expect(result).toEqual(["bears"]);
  });
});

describe("copyLast function", () => {
  const heroes = ["Ironman", "Thor", "Captain", "Black Widow", "Hulk"];
  const original = [...heroes];
  it("should skip the first 2 elements", () => {
    const result = fn.copyLast(heroes, 2);
    expect(result).toEqual(["Captain", "Black Widow", "Hulk"]);
  });
  it("should not modify original array", () => {
    fn.copyLast(heroes, 2);
    expect(heroes).toEqual(original);
  });
  it("should skip the first 0 elements (copy whole array)", () => {
    const result = fn.copyLast(heroes, 0);
    expect(result).toEqual(heroes);
  });
  it("should return empty array if skipping past array length", () => {
    const result = fn.copyLast(heroes, 6);
    expect(result).toEqual([]);
  });
});

describe("copyFirst function", () => {
  const heroes = ["Ironman", "Thor", "Captain", "Black Widow", "Hulk"];
  const original = [...heroes];
  it("should skip the last 2 elements", () => {
    const result = fn.copyFirst(heroes, 2);
    expect(result).toEqual(["Ironman", "Thor", "Captain"]);
  });
  it("should not modify original array", () => {
    fn.copyFirst(heroes, 2);
    expect(heroes).toEqual(original);
  });
  it("should skip the last 0 elements (copy whole array)", () => {
    const result = fn.copyFirst(heroes, 0);
    expect(result).toEqual(heroes);
  });
  it("should return empty array if skipping past array length", () => {
    const result = fn.copyFirst(heroes, 6);
    expect(result).toEqual([]);
  });
});

describe("copyWithCall function", () => {
  const heroes = ["Ironman", "Thor", "Captain"];
  const thanos = () => {
    return "Thanos";
  };
  it("should call a function with two arguments", () => {
    const result = fn.runOnEach([1, 2, 3, 4, 5], (e, i) => {
      return e + i;
    });
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
  it("should not modify original array", () => {
    const original = [...heroes];
    fn.runOnEach(heroes, thanos);
    expect(heroes).toEqual(original);
  });
  it("should call a function with no arguments", () => {
    const result = fn.runOnEach(heroes, thanos);
    expect(result).toEqual(["Thanos", "Thanos", "Thanos"]);
  });
});

describe("onlyIndex function", () => {
  const someNumbers = [
    [1, 2, 3, 4, 5],
    [6, 9, 8, 7, 6],
    [4, 5, 6, 6, 7],
    [0, 1, 2, 3, 4],
  ];
  it("should not modify the original array", () => {
    const original = [...someNumbers];
    fn.onlyIndex(someNumbers, 2);
    expect(someNumbers).toEqual(original);
  });
  it("should pull out the element at index 2", () => {
    const result = fn.onlyIndex(someNumbers, 2);
    expect(result).toEqual([3, 8, 6, 2]);
  });
  it("should pull out the element at index 0", () => {
    const result = fn.onlyIndex(someNumbers, 0);
    expect(result).toEqual([1, 6, 4, 0]);
  });
});

describe("oddToZero function", () => {
  it("should zero when some elements are odd", () => {
    const result = fn.oddToZero([1, 2, 3, 4, 5]);
    expect(result).toEqual([0, 2, 0, 4, 0]);
  });
  it("should zero when all elements are odd", () => {
    const result = fn.oddToZero([1, 3]);
    expect(result).toEqual([0, 0]);
  });
  it("should return same array when no elements are odd", () => {
    const result = fn.oddToZero([8, 10, 12]);
    expect(result).toEqual([8, 10, 12]);
  });
});

describe("firstLetters function", () => {
  it("should grab the first letters from 5 strings", () => {
    const result = fn.firstLetters(["hello", "my", "name", "is", "pikachu"]);
    expect(result).toEqual(["h", "m", "n", "i", "p"]);
  });
  it("should grab the first letters from 3 strings", () => {
    const result = fn.firstLetters(["JavaScript", "is", "awesome"]);
    expect(result).toEqual(["J", "i", "a"]);
  });
  it("should return an empty array when given an empty array", () => {
    const result = fn.firstLetters([]);
    expect(result).toEqual([]);
  });
});

describe("firstXToZeroMap function", () => {
  it("should change 3 numbers to 0", () => {
    const result = fn.firstXToZeroMap([0, 5, 9, 6], 3);
    expect(result).toEqual([0, 0, 0, 6]);
  });
  it("should not modify the array when asked to change 0 elements", () => {
    const result = fn.firstXToZeroMap(["Don't", "change", "me"], 0);
    expect(result).toEqual(["Don't", "change", "me"]);
  });
  it("should change all to zero when X beyond array length", () => {
    const result = fn.firstXToZeroMap([1, 2, 3], 4);
    expect(result).toEqual([0, 0, 0]);
  });
});

describe("nonPrimeToZero function", () => {
  it("should zero all numbers when non-prime", () => {
    const result = fn.nonPrimeToZero([-13, 0, 1, 4, 6]);
    expect(result).toEqual([0, 0, 0, 0, 0]);
  });
  it("should return an identical array if all are prime", () => {
    const result = fn.nonPrimeToZero([2, 17, 1601, 7919]);
    expect(result).toEqual([2, 17, 1601, 7919]);
  });
  it("should change only prime numbers to 0", () => {
    const result = fn.nonPrimeToZero([1, 2, 3, 4, 5]);
    expect(result).toEqual([0, 2, 3, 0, 5]);
  });
});

describe("append", () => {
  it("should append a string to 5 strings", () => {
    const result = fn.append(["hello", "my", "name", "is", "pikachu"], " -log");
    expect(result).toEqual([
      "hello -log",
      "my -log",
      "name -log",
      "is -log",
      "pikachu -log",
    ]);
  });
  it("should append a string to 2 strings", () => {
    const result = fn.append(["<img/>", "<p></p>"], "<hr/>");
    expect(result).toEqual(["<img/><hr/>", "<p></p><hr/>"]);
  });
  it("should not modify the original array", () => {
    const arr = ["Spiderman", "Peter Parker"];
    fn.append(arr, "Mary Jane");
    expect(arr).toEqual(["Spiderman", "Peter Parker"]);
  });
});

describe("copyWithCall function", () => {
  const heroes = ["Ironman", "Thor", "Captain"];
  const thanos = () => {
    return "Thanos";
  };
  it("should call a function with two arguments", () => {
    const result = fn.runOnEachMap([1, 2, 3, 4, 5], (e, i) => {
      return e + i;
    });
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
  it("should not modify original array", () => {
    const original = [...heroes];
    fn.runOnEachMap(heroes, thanos);
    expect(heroes).toEqual(original);
  });
  it("should call a function with no arguments", () => {
    const result = fn.runOnEachMap(heroes, thanos);
    expect(result).toEqual(["Thanos", "Thanos", "Thanos"]);
  });
});

describe("clone function", () => {
  const farm1 = ["sheep", "cow", "pig"];
  const farm2 = fn.clone(farm1);
  it("should clone an array of several elements", () => {
    expect(farm1).toEqual(farm2); // deep equality
  });
  it("should not return the same array", () => {
    expect(farm1 === farm2).toBeFalsy();
  });
  it("should clone an empty array", () => {
    expect(fn.clone([])).toEqual([]);
  });
});

describe("noMoreEvens function", () => {
  it("should remove evens from an array with a mix of numbers", () => {
    const result = fn.noMoreEvens([1, 2, 6, 4, 5]);
    expect(result).toEqual([1, 5]);
  });
  it("should remove all numbers when even", () => {
    const result = fn.noMoreEvens([2, 16, 40, 52]);
    expect(result).toEqual([]);
  });
  it("should not touch an array of all odd numbers", () => {
    const result = fn.noMoreEvens([1, 571, 3, 9]);
    expect(result).toEqual([1, 571, 3, 9]);
  });
  it("should remove negative even numbers as well", () => {
    const result = fn.noMoreEvens([-2, -571, -4]);
    expect(result).toEqual([-571]);
  });
});

describe("remove empty function", () => {
  it("should return [] when array is empty", () => {
    const result = fn.removeEmpty([]);
    expect(result).toEqual([]);
  });
  it("should return [] when array only has empty strings", () => {
    const result = fn.removeEmpty(["", "", ""]);
    expect(result).toEqual([]);
  });
  it("should return same array when array has no empty strings", () => {
    const result = fn.removeEmpty(["hello", "world"]);
    expect(result).toEqual(["hello", "world"]);
  });
  it("should return array without empty strings", () => {
    const result = fn.removeEmpty(["hello", "world", "", "name", "", "is"]);
    expect(result).toEqual(["hello", "world", "name", "is"]);
  });
});

describe("primesOnly function", () => {
  it("should return empty array if no primes", () => {
    const result = fn.primesOnly([-13, 0, 1, 4, 6]);
    expect(result).toEqual([]);
  });
  it("should return an identical array if all are prime", () => {
    const result = fn.primesOnly([2, 17, 1601, 7919]);
    expect(result).toEqual([2, 17, 1601, 7919]);
  });
});

describe("firstPrime function", () => {
  it("should find a prime at the beginning of the array", () => {
    const result = fn.firstPrime([2, 17, 1601, 7919]);
    expect(result).toEqual(2);
  });
  it("should find a prime at the end of the array", () => {
    const result = fn.firstPrime([1, 4, 16, 7919]);
    expect(result).toEqual(7919);
  });
  it("should find no primes in an empty array", () => {
    expect(fn.firstPrime([])).toEqual(undefined);
  });
});

describe("sum function", () => {
  it("should return 0 for an empty array", () => {
    const result = fn.sum([]);
    expect(result).toEqual(0);
  });
  it("should return negative for array of negative numbers", () => {
    const result = fn.sum([-2, -3]);
    expect(result).toEqual(-5);
  });
  it("should add up array with negative and postive numbers", () => {
    const result = fn.sum([-20, -3, 20]);
    expect(result).toEqual(-3);
  });
});

describe("largestReduce function", () => {
  it("should find the largest number in the array", () => {
    const result = fn.largestReduce([9, 8, 16, 2, 3]);
    expect(result).toEqual(16);
  });
  it("should return undefined since given array is empty", () => {
    const result = fn.largestReduce([]);
    expect(result).toEqual(undefined);
  });
  it("should return first index of array if all numbers are same", () => {
    const result = fn.largestReduce([10, 10, 10, 10]);
    expect(result).toEqual(10);
  });
});

describe("longest function", () => {
  it("should find the longest string at the end of the array", () => {
    const result = fn.longest(["Thor", "Loki", "Rocket", "Ant-Man"]);
    expect(result).toEqual("Ant-Man");
  });
  it("should find the longest string in the middle of the array", () => {
    const result = fn.longest(["Thor", "Spiderman", "Ant-Man"]);
    expect(result).toEqual("Spiderman");
  });
  it("should return string from array of length 1", () => {
    const result = fn.longest(["Wasp"]);
    expect(result).toEqual("Wasp");
  });
});

describe("matches function", () => {
  it("should match elements in various positions", () => {
    const result = fn.matches(["Thor", "Loki", "Ant-Man", "Loki"], "Loki");
    expect(result).toEqual(2);
  });
  it("should match concurrent elements", () => {
    const result = fn.matches(
      ["Spiderman", "Spiderman", "Mary Jane"],
      "Spiderman"
    );
    expect(result).toEqual(2);
  });
  it("should return 0 if no matches", () => {
    const result = fn.matches(["Thor", "Loki", "Ant-Man"], "Wonder Woman");
    expect(result).toEqual(0);
  });
  it("should return 0 if for an empty array", () => {
    const result = fn.matches([], "Thor");
    expect(result).toEqual(0);
  });
});

describe("combineLess5 function", () => {
  it("should return string of strings with length less than 5", () => {
    const result = fn.combineLess5([
      "Thor",
      "Loki",
      "Ant-Man",
      "Rocket",
      "Wasp",
    ]);
    expect(result).toEqual("ThorLokiWasp");
  });
  it("should return empty string when array is empty", () => {
    const result = fn.combineLess5([]);
    expect(result).toEqual("");
  });
  it("should return empty string when all element lengths are 5 or greater", () => {
    const result = fn.combineLess5([
      "Superman",
      "Batman",
      "Cat Woman",
      "The Hulk",
    ]);
    expect(result).toEqual("");
  });
  it("should return one element with length < 5", () => {
    const arr = ["Spiderman", "Loki", "Ant-Man", "Rocket"];
    const result = fn.combineLess5(arr);
    expect(result).toEqual("Loki");
  });
});

describe("largerThan5 function", () => {
  it("should return an array of numbers greater than 5", () => {
    const arr = [5, 9, 2, 6, 5];
    const result = fn.largerThan5(arr);
    expect(result).toEqual([9, 6]);
  });
  it("should return an empty array if argument array is empty", () => {
    const arr = [];
    const result = fn.largerThan5(arr);
    expect(result).toEqual([]);
  });
  it("should return an empty array if all elements less than or equal to 5", () => {
    const arr = [4, 3, 2];
    const result = fn.largerThan5(arr);
    expect(result).toEqual([]);
  });
  it("should find concurrent numbers larger than 5", () => {
    const result = fn.largerThan5([8, 8, 2, 3, 10]);
    expect(result).toEqual([8, 8, 10]);
  });
});

describe("largerThan5Filter function", () => {
  it("should return an array of numbers greater than 5", () => {
    const arr = [5, 9, 2, 6, 5];
    const result = fn.largerThan5Filter(arr);
    expect(result).toEqual([9, 6]);
  });
  it("should return an empty array if argument array is empty", () => {
    const arr = [];
    const result = fn.largerThan5Filter(arr);
    expect(result).toEqual([]);
  });
  it("should return an empty array if all elements less than or equal to 5", () => {
    const arr = [4, 3, 2];
    const result = fn.largerThan5Filter(arr);
    expect(result).toEqual([]);
  });
  it("should find concurrent numbers larger than 5", () => {
    const result = fn.largerThan5Filter([8, 8, 2, 3, 10]);
    expect(result).toEqual([8, 8, 10]);
  });
});

describe("getEvens function", () => {
  it("should pull even numbers from various positions", () => {
    const result = [9, 80, 11, 2].getEvens();
    expect(result).toEqual([80, 2]);
  });
  it("should pull even numbers from concurrent positions", () => {
    const result = [2, 4, 6, 7, 8].getEvens();
    expect(result).toEqual([2, 4, 6, 8]);
  });
  it("should have no result if no evens", () => {
    const result = [1, 3, 9, 21].getEvens();
    expect(result).toEqual([]);
  });
});

describe("arrSum function", () => {
  it("should return the sum of all elements in the array", () => {
    const result = [2, 4, 6, 7, 8].arrSum();
    expect(result).toEqual(27);
  });
  it("should find sum of an array of numbers", () => {
    const result = [2, 17, 3, -3].arrSum();
    expect(result).toEqual(19);
  });
  it("should add strings together", () => {
    const data = ["<p>", "<img src='https://placebear.com/800/710'>", "</p>"];
    const result = data.arrSum();
    expect(result).toEqual("<p><img src='https://placebear.com/800/710'></p>");
  });
  it("should return 0 for an empty array", () => {
    const result = [].arrSum();
    expect(result).toEqual(undefined);
  });
});

describe("pad function", () => {
  it("should modify the original array", () => {
    const arr = ["Doctor"];
    arr.pad(1, "Strange");
    expect(arr).toEqual(["Doctor", "Strange"]);
  });
  it("should pad multiple times", () => {
    const arr = ["<button name='submit'></button>", "<div></div>"];
    arr.pad(2, "<br/>");
    expect(arr).toEqual([
      "<button name='submit'></button>",
      "<div></div>",
      "<br/>",
      "<br/>",
    ]);
  });
  it("should return same array when given negative pad number", () => {
    const result = ["Quill", "Gamora"].pad(-2, "Drax");
    expect(result).toEqual(["Quill", "Gamora"]);
  });
  it("should return same array when given zero pad number", () => {
    const result = ["Quill", "Gamora"].pad(0, "Drax");
    expect(result).toEqual(["Quill", "Gamora"]);
  });
});

describe("fizzbuzz function", () => {
  it("should change numbers divisible by 3 to fizz", () => {
    const magicNumbers = [1, 2, 3, 6, 19, 18];
    magicNumbers.fizzbuzz();
    expect(magicNumbers).toEqual([1, 2, "fizz", "fizz", 19, "fizz"]);
  });
  it("should change numbers divisible by 5 to buzz", () => {
    const magicNumbers = [1, 2, 5, 10, 11];
    magicNumbers.fizzbuzz();
    expect(magicNumbers).toEqual([1, 2, "buzz", "buzz", 11]);
  });
  it("should change numbers divisible by 15 to fizzbuzz", () => {
    const magicNumbers = [1, 2, 4, 15, 16, 30];
    magicNumbers.fizzbuzz();
    expect(magicNumbers).toEqual([1, 2, 4, "fizzbuzz", 16, "fizzbuzz"]);
  });
  it("should correctly change 3 to fizz, 5 to buzz, and 15 to fizzbuzz", () => {
    const magicNumbers = [9, 80, 12, 2, 30];
    magicNumbers.fizzbuzz();
    expect(magicNumbers).toEqual(["fizz", "buzz", "fizz", 2, "fizzbuzz"]);
  });
});

describe("removeEvens function", () => {
  it("should remove even numbers from various positions", () => {
    const arr = [9, 80, 11, 2];
    arr.removeEvens();
    expect(arr).toEqual([9, 11]);
  });
  it("should remove even numbers from concurrent positions", () => {
    const arr = [2, 4, 6, 7, 8];
    arr.removeEvens();
    expect(arr).toEqual([7]);
  });
  it("should leave array the same if no evens", () => {
    const arr = [1, 3, 9, 21];
    arr.removeEvens();
    expect(arr).toEqual([1, 3, 9, 21]);
  });
  it("should leave empty array the same", () => {
    const arr = [];
    arr.removeEvens();
    expect(arr).toEqual([]);
  });
});

describe('getIterator function', () => {
  it('should iterate through 3 elements', () => {
    const iterate = ['PayPal', 'Google', 'Netflix'].getIterator()
    expect(iterate()).toEqual('PayPal')
    expect(iterate()).toEqual('Google')
    expect(iterate()).toEqual('Netflix')
  })
  it('should return to beginning once done', () => {
    const iterate = [9, 80, 12, 2].getIterator()
    expect(iterate()).toEqual(9)
    expect(iterate()).toEqual(80)
    expect(iterate()).toEqual(12)
    expect(iterate()).toEqual(2)
    expect(iterate()).toEqual(9)
    expect(iterate()).toEqual(80)
  })
  it('should return undefined for empty array iterator', () => {
    const iterate = [].getIterator()
    expect(iterate()).toEqual(undefined)
  })
  it('should iterate through one element', () => {
    const iterate = ['Ironman'].getIterator()
    expect(iterate()).toEqual('Ironman')
    expect(iterate()).toEqual('Ironman')
  })
})
