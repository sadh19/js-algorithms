//Encontrar el primer par de numeros en el arreglo que sumados den cero
function sumZero(sortedArray) {

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if ((sortedArray[i] + sortedArray[j]) === 0) {
        return [sortedArray[i], sortedArray[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));