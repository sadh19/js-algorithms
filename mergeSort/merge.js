//Pseudocode
//Combination of merging and sorting, expecting that the original arrays are sorted
//Exploits the fact that arrays of 0/1 elements are sorted

//1 - Split the array on half, and then again and again, until we have arrays with 1 elements.
//2 - Merge and sort pairs of arrays until we only have arrays with two elements.
//3- Repeat the process, to generate arrays of 4 elements, and so on and on.

function mergingFunction(arrOne, arrTwo) {
  //Create empty array that will be returned
  let result = [];

  //Create pointers to initialize array position
  let i = 0;
  let j = 0;

  //If the current value of the first array is smaller than the current value of the second array, push the value in the fisrt array in the results array and move on to the next value in the first array.
  //If the current value of the first array is greater than the current value of the second array, push the value in the second array in the results array and move on to the next value in the second array.
  //Once we exhaust one array, push in all the remaining values from the other array.
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] <= arrTwo[j]) {
      result.push(arrOne[i]);
      i++;
    } else if (arrTwo[j] < arrOne[i]) {
      result.push(arrTwo[j]);
      j++;
    }
  }

  if (i < arrOne.length) {
    result = result.concat(arrOne.slice(i));
  }

  if (j < arrTwo.length) {
    result = result.concat(arrTwo.slice(j));
  }

  return result;
}

console.log(mergingFunction([1, 3, 6, 7, 9, 10], [1, 2, 5, 7, 8, 9]));
console.log(mergingFunction([], [1, 2, 5, 7, 8, 9]));
