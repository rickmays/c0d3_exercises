const addLog = (msg, func) => {
  return (a, b) => {
    console.log(msg, a, b);
    return func(a, b);
  };
};

const add2 = addLog("sum of 2 numbers", (a, b) => {
  return a + b;
});

const isFirstBigger = addLog("comparing 2 numbers", (a, b) => {
  return a > b;
});

let result = add2(5, 2);
if (isFirstBigger(result, 5)) {
  result = 100;
}

result = add2(result, 5);
