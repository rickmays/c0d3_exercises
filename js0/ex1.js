const solution = () => {
  // return 10 * 10;
  // return "This is a string " + "plus another string";
  // return true || false;
  // return () => {
  //   const a = 1;
  //   const b = 2;
  //   return a + b;
  // };
  return () => {
    console.log("First Console Log");
    console.log("Second Console Log");
    console.log("Third Console Log");
  };
};
solution()();
