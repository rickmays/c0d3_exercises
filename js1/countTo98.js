const countTo98 = (counter = 0) => {
  if (counter > 98) {
    return;
  }
  console.log(counter);
  return countTo98(counter + 1);
};

countTo98();
