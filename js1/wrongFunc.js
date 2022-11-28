const wrongFunc = (str, c = 0) => {
  if (c === str.length) {
    return;
  }
  setTimeout(() => {
    console.log(str[s]);
  }, 1000);
  return wrongFunc(str, c + 1);
};

wrongFunc("hello");
