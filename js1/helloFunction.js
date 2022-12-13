const helloFunction = () => {
  let count = 0;
  let str = "hello";
  let multiStr;
  return () => {
    count += 1;
    multiStr = str.repeat(count);
    return multiStr;
  };
};

const moreHello = helloFunction();
let b = moreHello();
console.log(b);
b = moreHello();
console.log(b);
b = moreHello();
console.log(b);
b = moreHello();
console.log(b);
