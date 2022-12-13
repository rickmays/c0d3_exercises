const sumEvens = (num, sum = 0) => {
  if (num <= 0) {
    return sum;
  }
  return sumEvens(num - 1, num % 2 === 0 ? sum + num : sum);
};

console.log(sumEvens(5));
