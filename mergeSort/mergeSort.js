//Pseudocode
//Combination of merging and sorting
//Exploits the fact that arrays of 0/1 elements are sorted

//1 - Split the array on half, and then again and again, until we have arrays with 1 elements.
//2 - Merge and sort pairs of arrays until we only have arrays with two elements.
//3- Repeat the process, to generate arrays of 4 elements, and so on and on.

function merge(arrOne, arrTwo) {
  //Create empty array that will be returned
  let result = [];

  //Create pointers to initialize array position
  let indexOne = 0;
  let indexTwo = 0;

  //If the current value of the first array is smaller than the current value of the second array, push the value in the fisrt array in the results array and move on to the next value in the first array.
  //If the current value of the first array is greater than the current value of the second array, push the value in the second array in the results array and move on to the next value in the second array.
  //Once we exhaust one array, push in all the remaining values from the other array.

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
