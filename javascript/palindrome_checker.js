/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/

function palindrome(str) {
  // Remove non-alphanumerics
  let regex = /[A-Za-z0-9]/g;
  let matches = str.match(regex);
  let clean = matches.reduce((acc, elm) => `${acc}${elm.toLowerCase()}`, '');
  // Compare chars in order from the start against the end
  // I used parseInt() here incase `clean` has an odd number of chars
  // However when there are an odd number, we needn't compare the middle char
  for (let idx = 0; idx < parseInt(clean.length / 2); idx++) {
    if (clean[idx] !== clean[clean.length - 1 - idx]) {
      return false;
    }
  }
  return true;
}
