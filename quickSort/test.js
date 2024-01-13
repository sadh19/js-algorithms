const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(2, 3));

let currMultiplicar = function (a) {
  return function (b) {
    return a * b;
  };
};

let currMultiplicar2 = (a) => (b) => a * b;

const primero = currMultiplicar(5);
const segundo = currMultiplicar2(15);
console.log(primero(25));
console.log(segundo(3));
