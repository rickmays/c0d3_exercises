// const countToMe = (num, counter = 8) => {
//   if (counter > num) {
//     return;
//   }
//   console.log(counter);
//   return countToMe(num, counter + 1);
// };
const countToMe = (num, counter = 8) => {
  if (counter > num) {
    return;
  }
  console.log(counter);
  return countToMe(num, counter + 1);
};

countToMe(8);
