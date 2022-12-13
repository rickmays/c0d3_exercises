// my solution
const runIt = (func) => {
  return func;
};

// answer solution:
// const runIt = a => {
//   return (b, c) => {
//     return a(b, c)
//   }
// }

const subtract = runIt((a, b) => {
  return a - b;
});

let b = subtract(3, 20);
console.log(b);
b = subtract(11, 2);
console.log(b);

const fun = runIt((a, b) => {
  return "hello";
});

let c = fun(27, 4);
console.log(c);
