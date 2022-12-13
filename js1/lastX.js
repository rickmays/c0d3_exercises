const lastX = (string, x, result = "") => {
  if (x <= 0) {
    return result;
  }
  if (!(x > string.length)) {
    result += string[string.length - x];
  }
  return lastX(string, x - 1, result);
};

a = lastX("Winter", 8);
console.log(a);
