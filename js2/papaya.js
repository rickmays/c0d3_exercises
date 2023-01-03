Array.prototype.papaya = function (i = 0, z = 0) {
  if (i === this.length) return z;
  console.log(z);
  return this.papaya(i + 1, this[i] + z);
};
const juicy = [7, 8, 2].papaya; // function
console.log(juicy);
const juicy2 = [7, 8, 2].papaya(); // 17
console.log(juicy2);
