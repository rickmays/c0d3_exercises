const hello3x = () => {
  let count = 0;
  return () => {
    if (count < 3) {
      count += 1;
      return "hello";
    } else {
      return "";
    }
  };
};

const threeF = hello3x();
let b = threeF();
console.log(b);
b = threeF();
console.log(b);
b = threeF();
console.log(b);
b = threeF();
console.log(b);
b = threeF();
console.log(b);
