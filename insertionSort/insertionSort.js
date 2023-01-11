function swap(arr, idx, idy) {
  let temp = arr[idx];
  arr[idx] = arr[idy];
  arr[idy] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < arr[i - 1]) {
      let tempI = i;

      for (let j = i - 1; j >= 0; j--) {
        if (arr[tempI] < arr[j]) {
          swap(arr, tempI, j);
          tempI = j;
        }
      }
    }
  }

  return arr;

}

console.log(insertionSort([4, 1, 5, 8, 2, 6, 10, 11, 10, 9, 2, 1, 5]));