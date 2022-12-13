// fn will be an object with all your preflight solutions
const fn = require("../preflight.js");

describe("removeCharX function", () => {
  it("should remove the first character", () => {
    const str = "We're in the endgame now.";
    const result = fn.removeCharX(str, 0);
    expect(result).toEqual("e're in the endgame now.");
  });
  it("return the original string", () => {
    const str = "a";
    const result = fn.removeCharX(str, 3);
    expect(result).toEqual("a");
  });
  it("return the original string", () => {
    const str = "abc";
    const result = fn.removeCharX(str, -3);
    expect(result).toEqual("abc");
  });
});

describe("less3Diff function", () => {
  it("should return false on strings with >= 3 letters different", () => {
    const result = fn.less3Diff("spiderman", "mary jane");
    expect(result).toEqual(false);
  });
  it("should return true if < 3 letters different", () => {
    const result = fn.less3Diff("spiderman", "spyderman");
    expect(result).toEqual(true);
  });
  it("should always return true on strings < 3 characters", () => {
    const result = fn.less3Diff("jk", "lm");
    expect(result).toEqual(true);
  });
  it("should return false on strings equal to 3 and that are different", () => {
    const result = fn.less3Diff("cho", "tis");
    expect(result).toEqual(false);
  });
});

describe("reverso function", () => {
  it('should reverse "sneakers"', () => {
    const result = fn.reverso("sneakers");
    expect(result).toEqual("srekaens");
  });
  it("should reverse strings of one letter", () => {
    const result = fn.reverso("s");
    expect(result).toEqual("s");
  });
  it("should return an empty string when given an empty string", () => {
    const result = fn.reverso("");
    expect(result).toEqual("");
  });
});

describe('delayAndCall function', () => {
  jest.useFakeTimers()
  it('should run function after 1000 milliseconds', () => {
    const callback = jest.fn()
    const fun = fn.delayAndCall(1000, callback)
    fun()
    expect(callback).not.toBeCalled() // It shouldn't run right away
    jest.advanceTimersByTime(1000)
    expect(callback).toBeCalled() // But after 1000ms
    // it should have run
  })
  it('should run callback repeatedly', () => {
    const callback = jest.fn()
    const fun = fn.delayAndCall(1000, callback)
    fun()
    expect(callback).not.toBeCalled() // It shouldn't run right away
    jest.runAllTimers()
    expect(callback).toHaveBeenCalledTimes(1) // Should have been
    // called once
    fun()
    jest.runAllTimers()
    expect(callback).toHaveBeenCalledTimes(2) // Now it should have
    // been called twice
  })
})

describe('primeMachine function', () => {
  it('should return next 2 primes starting with a negative number', () => {
    const getPrime1 = fn.primeMachine(-2)
    expect(getPrime1()).toEqual(2)
    expect(getPrime1()).toEqual(3)
  })
  it('should not return starting number if prime', () => {
    const getPrime2 = fn.primeMachine(5)
    expect(getPrime2()).toEqual(7)
    expect(getPrime2()).toEqual(11)
  })
  it('should return next 3 primes starting at 10', () => {
    const getPrime3 = fn.primeMachine(10)
    expect(getPrime3()).toEqual(11)
    expect(getPrime3()).toEqual(13)
    expect(getPrime3()).toEqual(17)
  })
})
