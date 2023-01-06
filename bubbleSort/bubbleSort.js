function swapValues(arr, id1, id2) {
  let tempvalue = arr[id1];
  arr[id1] = arr[id2];
  arr[id2] = tempvalue;
}

function bubbleSort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swapValues(arr, i, j);
      }
    }
  }

  return arr;



}

console.log(bubbleSort([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 1, 5]));