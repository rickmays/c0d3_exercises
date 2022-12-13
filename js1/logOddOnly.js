const logOddOnly = (string, index = 0) => {
  if (index === string.length) {
    return;
  }
  if (index % 2 !== 0) {
    console.log(string[index]);
  }
  return logOddOnly(string, index + 1);
};

logOddOnly(" This is fun! ");
