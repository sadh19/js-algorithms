function same(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (temp of array1) {
    obj1[temp] = (obj1[temp] || 0) + 1;
  }

  for (temp of array2) {
    obj2[temp] = (obj2[temp] || 0) + 1;
  }

  for (key in obj1) {
    if (!(key ** 2) in obj2) {
      return false;
    }

    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }

  return true;

}


console.log(same([1, 2], [1, 4]));