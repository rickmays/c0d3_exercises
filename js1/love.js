const love = (counter = 0) => {
  if (counter === 99) {
    return;
  }
  console.log(counter, "The things I do for love");
  return love(counter + 1);
};

love();
