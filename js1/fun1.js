const fun1 = (num, func) => {
  if (num <= 0) {
    return;
  }
  func();
  return fun1(num - 1, func);
};

const a = fun1(2, () => {
  console.log("c0d3")
})
