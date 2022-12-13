const removeCharacter = (string, character, result = "", index = 0) => {
  if (index === string.length) {
    return result;
  }
  if (string[index] !== character) {
    result += string[index];
  }
  return removeCharacter(string, character, result, index + 1);
};

a = removeCharacter("Iblovebcoding!", "b");
console.log(a);
