const fizzbuzz = (num, counter = 1) => {
  if (counter > num) {
    return;
  }
  let value = counter;
  if (counter % 15 === 0) {
    value = "fizzbuzz";
  } else if (counter % 5 === 0) {
    value = "buzz";
  } else if (counter % 3 === 0) {
    value = "fizz";
  }
  console.log(value);
  return fizzbuzz(num, counter + 1);
};
fizzbuzz(5);
