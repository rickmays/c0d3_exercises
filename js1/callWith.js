const callWith = (num) => {
  return (func) => {
    return func(num);
  };
};

const fun = callWith(10);
let b = fun((num) => {
  return num + 5;
});
console.log(b);

b = fun((num) => {
  return num + "hello";
});
console.log(b);

b = fun((num) => {
  return 500 % num;
});
console.log(b);
