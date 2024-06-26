function swap(arr, idx, idy) {
  let temp = arr[idx];
  arr[idx] = arr[idy];
  arr[idy] = temp;
}

function insertionSort(arr) {

  let steps = 0;

  for (let i = 1; i < arr.length; i++) {

    steps++;

    if (arr[i] < arr[i - 1]) {
      let tempI = i;
      for (let j = i - 1; j >= 0 && arr[tempI] < arr[j]; j--) {
        steps++;
        swap(arr, tempI, j);
        tempI = j;
      }
    }
  }

  console.log("Steps:", steps);
  return arr;

}

console.log(insertionSort([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 1, 5]));
console.log(insertionSort([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 0, 100]));