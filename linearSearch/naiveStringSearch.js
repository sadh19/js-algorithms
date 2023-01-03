function naiveStringSearch(fullChain, requiredChain) {

  let ocurrences = 0;

  for (let i = 0; i < fullChain.length; i++) {

    for (let j = 0; j < requiredChain.length; j++) {
      if (requiredChain[j] !== fullChain[i + j]) break;
      if (j === requiredChain.length - 1) ocurrences++;
    }
  }
  return ocurrences;
}

console.log(naiveStringSearch('mariamamamamama', 'mar'));
console.log(naiveStringSearch('mixamixmiamiamiamix', 'mix'));

