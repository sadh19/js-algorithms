//Funcion recursiva para encontrar la suma de numeros desde 1 hasta el numero deseado
function sumRange(num) {
  if (num === 1) {
    return num;
  }

  return num + sumRange(num - 1);

}

console.log(sumRange(4));
console.log(sumRange(3));

