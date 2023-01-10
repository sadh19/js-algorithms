function swapValues(arr, id1, id2) {
  let tempvalue = arr[id1];
  arr[id1] = arr[id2];
  arr[id2] = tempvalue;
}

function bubbleSort(arr) {

  let steps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      steps++;
      if (arr[i] > arr[j]) {
        swapValues(arr, i, j);
      }
    }
  }

  console.log("Steps:", steps);
  return arr;
}


function bubbleSortTwo(arr) {

  let steps = 0;

  let noSwaps = true;

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      steps++;
      if (arr[j] > arr[j + 1]) {
        swapValues(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }

  }

  console.log("Steps:", steps);
  return arr;

}


console.log(bubbleSort([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 1, 5]));
console.log(bubbleSortTwo([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 1, 5]));


