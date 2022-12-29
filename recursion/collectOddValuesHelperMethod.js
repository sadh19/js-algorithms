//Funcion recursiva para recolectar todos los impares de un arreglo dado, usando un helper method
function collectOddValues(arr) {

  let result = [];

  function helper(tempArray) {

    if (tempArray.length === 0) {
      return result;
    }

    if (tempArray[0] % 2 !== 0) {
      result.push(tempArray[0]);
    }

    return helper(tempArray.slice(1));
  }

  return helper(arr);
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 899, 23, 54, 5]));