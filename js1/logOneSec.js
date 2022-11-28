const logOneSec = (string, index = 0) => {
  if (index === string.length) {
    return;
  }
  setTimeout(() => {
    console.log(string[index]);
    return logOneSec(string, (index += 1));
  }, 1000);
};

logOneSec("hello");
