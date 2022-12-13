const lessThan = (num) => {
  return (num2) => {
    return num2 < num;
  };
};

const youngerThanCardB = lessThan(27);
let miley = youngerThanCardB(26);
console.log(miley);
let nicki = youngerThanCardB(36);
console.log(nicki);

const smallerThan = lessThan(2);
let b = smallerThan(3);
console.log(b);
b = smallerThan(5) || youngerThanCardB(5);
console.log(b);
const youngerThanMary = lessThan(0);
b = youngerThanMary(0);
console.log(b);
b = youngerThanMary(27);
console.log(b);
b = youngerThanMary(22);
console.log(b);
b = youngerThanMary(-1);
console.log(b);
