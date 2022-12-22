function validAnagram(word1, word2) {

  if (word1.length !== word2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  let arrayWord1 = word1.split('');
  let arrayWord2 = word2.split('');

  for (let temp of arrayWord1) {
    obj1[temp] = (obj1[temp] || 0) + 1;
  }

  for (let temp of arrayWord2) {
    obj2[temp] = (obj2[temp] || 0) + 1;
  }

  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;

}


console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('castor', 'castro'));
console.log(validAnagram('retener', 'enterre'));