//Funcion recursiva para saber si algun elemento de un listado de numeros dados es impar
function isOddNumber(arr) {

  if (arr.length === 0) {
    return false;
  }

  if (arr[0] % 2 === 0) {
    arr.splice(0, 1);
    return isOddNumber(arr);
  }

  return true;
}

console.log(isOddNumber([22, 24, 26, 52, 20, 323232, 122, 121]));