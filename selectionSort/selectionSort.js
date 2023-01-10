function swap(arr, idx, idy) {
  let temp = arr[idx];
  arr[idx] = arr[idy];
  arr[idy] = temp;
}

function selectionSort(arr) {

  let minIndex = 0;
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {

    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {

      steps++;

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }

  }

  console.log("Steps:", steps);
  return arr;

}


console.log(selectionSort([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 1, 5]));

