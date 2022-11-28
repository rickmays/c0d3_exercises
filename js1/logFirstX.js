const logFirstX = (string, x, index = 0) => {
  if (index >= x || index >= string.length) {
    return;
  }
  console.log(string[index]);
  return logFirstX(string, x, index + 1);
};

const c = logFirstX("I am having a great day!", 5);
