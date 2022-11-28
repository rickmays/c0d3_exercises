const numberedHello = (num, hellos = "") => {
  if (num < 1) {
    return hellos;
  }
  return numberedHello(num - 1, hellos + "hello");
};

console.log(numberedHello(5));
