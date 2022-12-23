//Encontrar la maxima suma de numeros consecutivos dados el arreglo y la cantidad en la cadena de numeros
function maxSubarraySum(arr, num) {

  if (arr.length === 0) {
    return null;
  }

  let max = 0;
  let maxTemp = 0;

  for (let i = 0; i < num; i++) {
    maxTemp += arr[i];
  }

  max = maxTemp;

  for (let j = num; j < arr.length; j++) {
    maxTemp = maxTemp - arr[j - num] + arr[j];
    max = Math.max(maxTemp, max);
  }

  return max;
}



console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
