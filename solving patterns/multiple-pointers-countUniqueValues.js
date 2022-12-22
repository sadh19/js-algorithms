function countUniqueValues(sortedArray) {

  let counter = 0;

  //Crear punteros
  let positionIndex = 0;
  let iterativeIndex = 0;

  if (sortedArray.length === 0) {
    return 0;
  }

  while (iterativeIndex <= sortedArray.length) {

    if (sortedArray[positionIndex] === sortedArray[iterativeIndex]) {
      iterativeIndex++;
    } else {
      positionIndex = iterativeIndex;
      counter++;
    }

  }

  return counter;



}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 4, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -2, -1, 0, 1, 1, 1, 1, 2]));
