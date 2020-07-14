/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  // Use regex to match each individual word.
  // A word is defined by a lowercase or uppercase character followed by zero 
  // or more lowercase characters.
  let regex = /[A-Za-z][a-z]*/g;
  let words = str.match(regex);
  // Invoke map on the array of words to build an array of lowercase words.
  let lower_words = words.map(elem => elem.toLowerCase());
  // Return a string of all array items joined by '-'
  return lower_words.join("-");
}

console.log(spinalCase('This Is Spinal Tap')); // "this-is-spinal-tap"
