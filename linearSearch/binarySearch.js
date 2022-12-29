function binarySearch(arr, num) {

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] < num) {
      leftIndex = middleIndex + 1;
    } else if (arr[middleIndex] > num) {
      rightIndex = rightIndex - 1;
    } else {
      return middleIndex;
    }

  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 5, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 5, 7, 8, 9, 12, 14, 15, 21, 22, 25], 25));

