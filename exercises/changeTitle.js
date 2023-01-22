// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
function titleCase(title, minorWords) {

  //Validar vacios
  if (!title && !minorWords) {
    return '';
  }

  let titleNorm = title.toLowerCase().split(' ');

  //Validar vacio minorWords
  if (!minorWords) {
    for (let i = 0; i < titleNorm.length; i++) {
      titleNorm[i] = titleNorm[i].substr(0, 1).toUpperCase() + titleNorm[i].substr(1);
    }
    return titleNorm.join(' ');
  }

  let minorNorm = minorWords.toLowerCase().split(' ');

  for (let i = 1; i < titleNorm.length; i++) {

    let coincidence = minorNorm.indexOf(titleNorm[i]);

    if (coincidence !== -1) {
      titleNorm[i] = minorNorm[coincidence];
    } else {
      titleNorm[i] = titleNorm[i].substr(0, 1).toUpperCase() + titleNorm[i].substr(1);
    }


  }

  titleNorm[0] = titleNorm[0].substr(0, 1).toUpperCase() + titleNorm[0].substr(1);

  return titleNorm.join(" ");

}

//A Clash of Kings
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
