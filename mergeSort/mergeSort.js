function merge(arrOne, arrTwo) {

  let result = [];
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < arrOne.length && indexTwo < arrTwo.length) {

    if (arrOne[indexOne] <= arrTwo[indexTwo]) {
      result.push(arrOne[indexOne]);
      indexOne++;
    } else {
      result.push(arrTwo[indexTwo]);
      indexTwo++;
    }

  }

  if (indexOne < arrOne.length) {
    result.push(...arrOne.slice(indexOne));
  }

  if (indexTwo < arrTwo.length) {
    result.push(...arrTwo.slice(indexTwo));
  }



  return result;

}

// console.log(merge([1, 3, 4, 5, 6, 7, 8], [1, 2, 3, 5, 7, 9]));
// console.log(merge([1, 2, 3, 4, 5, 6, 7, 8], [9, 10]));
// console.log(merge([1, 4], [7, 10]));
// console.log(merge([8, 32], [7, 10]));

function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  let leftSide = mergeSort(arr.slice(0, middle));
  let rightSide = mergeSort(arr.slice(middle));

  return merge(leftSide, rightSide);

}


console.log(mergeSort([8, 32, 4, 5, 61, 2]));

