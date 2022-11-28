// console.log("string1", "string2");
// app.get(() => {});
// setTimeout(() => {}, 1000);
const massiveOrSmall = (num1, num2) => {
  return num1 + num2 > 100 ? "massive" : "small";
};
console.log(massiveOrSmall(30, 60));
