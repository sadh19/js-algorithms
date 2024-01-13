//Quicksort
//Exploits the fact that arrays of 0/1 elements are sorted
//Works by selecting one element("pivot") and finding the index where the pivot should end up in the sorted array
//Move the elements that are less than the pivot to the left, and the elements greater than the pivot to the rigth side
//Once the pivot is positioned, quicksort can be applied on either side of the array

function swap(arr, pivotIndex, currentIndex) {
  let pivotElement = arr[pivotIndex];
  arr[pivotIndex] = arr[currentIndex];
  arr[currentIndex] = pivotElement;
}

//This helper funtion return the index of the pivot element
//It takes three arguments, the array itself, a start index and a final index, with default values defined
function pivotHelper(arr, startIndex = 0, lastIndex = arr.length - 1) {
  //Variable that holds the current pivot index (keeps track of where the pivot should end up)
  let currentPivot = 0;

  //Variable that holds the initial pivot index
  let initialPivot = 0;

  //Iterate the array
  while (startIndex <= lastIndex) {
    //If the initial pivot element is greater than the current array iteration element, well move one space to the current pivot and change the values of the elements of the current pivot and the actual index iteration
    if (arr[initialPivot] > arr[startIndex]) {
      currentPivot++;
      swap(arr, currentPivot, startIndex);
    }

    startIndex++;
  }

  //After the iteration, well change the original position pivot and the last position found
  swap(arr, initialPivot, currentPivot);
  //And we return the correct pivot position
  return currentPivot;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  //Base case when the left and right values are equal
  if (left < right) {
    //Well look for the current pivot
    let pivot = pivotHelper(arr, left, right);

    //left side
    quickSort(arr, left, pivot - 1);

    //right side
    quickSort(arr, pivot + 1, right);
  }

  return arr;
}

console.log(quickSort([5, 2, 19, 21, 3, 20, 1]));
