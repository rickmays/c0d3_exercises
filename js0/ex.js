const fn1 = new Function("a", "b", "a + b");
const res1 = fn1(23, 2); // undefined because nothing is returned
console.log(`res1 = ${res1}`);

const fn2 = new Function("return 10");
const res2 = fn2(); // 10
console.log(`res2 = ${res2}`);

const fn3 = new Function("x", "y", "return x === y");
let res31 = fn3(); // true since both variables have undefined values
res32 = fn3(9, 9); // true
res33 = fn3(9, 8); // false
console.log(`res31 = ${res31}`);
console.log(`res32 = ${res32}`);
console.log(`res33 = ${res33}`);

const invisible = () => {
  setTimeout(() => {
    return 100;
  }, 1000);
};
const cloak = invisible();
console.log(cloak);
