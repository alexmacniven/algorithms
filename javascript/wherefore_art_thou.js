/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

Make a function that looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs 
(second argument).
*/
function whatIsInAName(collection, source) {
  let arr = [];
  // Create an array keys of the source object
  let keys = Object.keys(source);
  arr = collection.filter(item => {
    // Test for each key/value in source existing in collection
    for (let i = 0; i < keys.length; i++) {
      if (item[keys[i]] !== source[keys[i]]) {
        // Returns false on first fail
        return false;
      }
    }
    // When all keys have been checked and satisfied return true
    return true; 
  })
  return arr;
}

console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ], 
  { last: "Capulet" }
)); // [{ first: "Tybalt", last: "Capulet" }]