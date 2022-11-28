const logNonMatching = (word, character, index = 0) => {
  if (index === word.length) {
    return;
  }
  if (word[index] !== character) {
    console.log(word[index]);
  }
  logNonMatching(word, character, index + 1);
};

logNonMatching("banana", "a");
