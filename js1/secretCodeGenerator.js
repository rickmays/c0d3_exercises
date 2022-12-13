const secretCodeGenerator = (
  string,
  letter,
  replString,
  i = 0,
  result = ""
) => {
  if (i === string.length) {
    return result;
  }
  if (string[i] === letter) {
    result += replString;
  } else {
    result += string[i];
  }
  return secretCodeGenerator(string, letter, replString, i + 1, result);
};

const a = secretCodeGenerator("Boomerang", "o", "u");
console.log(a);
