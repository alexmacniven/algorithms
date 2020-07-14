/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

Convert a supplied string into Pig Latin.
For this challenge strings are English words in lowercase.
*/
function translatePigLatin(str) {
  let result;
  let is_const = /^[^aeiou]+/;  // Regex to capture consonant cluster

  let matches = str.match(is_const);

  if (matches) { // If str starts with a consonant cluster
    // Split the string into an array of characters and remove the consonant 
    // cluster from the beginning.
    let str_arr = str.split("");
    let sliced = str_arr.splice(0, matches[0].length);
    for (let i = 0; i < sliced.length; i++) {
      str_arr.push(sliced[i]);
    }
    // Add 'ay' to the end of the character array
    str_arr.push("ay");
    // Join the character array to form return string
    result = str_arr.join("");
  } else { // Str starts with a vowel, add 'way' to the end
    result = `${str}way`;
  }
  return result;
}