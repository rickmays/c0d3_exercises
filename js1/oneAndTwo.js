const oneAndTwo = () => {
  setTimeout(() => {
    console.log("one");
    setTimeout(() => {
      console.log("two");
    }, 10 * 1000);
  }, 20 * 1000);
};

oneAndTwo();
