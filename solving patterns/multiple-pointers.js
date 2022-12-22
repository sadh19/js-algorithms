//Encontrar el primer par de numeros en el arreglo que sumados den cero
function sumZero(sortedArray) {

  let pointerLeft = 0;
  let pointerRight = sortedArray.length - 1;

  while (pointerLeft < pointerRight) {
    let sum = sortedArray[pointerLeft] + sortedArray[pointerRight];

    if (sum === 0) {
      return [sortedArray[pointerLeft], sortedArray[pointerRight]];
    }

    if (sum > 0) {
      pointerRight--;
    } else {
      pointerLeft++;
    }

  }


}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));