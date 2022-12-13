const wait20 = () => {
  setTimeout(() => {
    console.log("one");
  }, 20 * 1000); // setTimeout uses milliseconds. 1000 milliseconds per second
};

wait20();
