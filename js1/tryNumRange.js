const tryNumRange = (num, func) => {
  if (num <= 1) {
    return false;
  }
  if (func(num)) {
    return true;
  }
  return tryNumRange(num - 1, func);
};

let res = tryNumRange(15, e => {
  return e > 10
}) 

console.log(res);
