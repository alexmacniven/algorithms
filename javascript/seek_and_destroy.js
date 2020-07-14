/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

Remove all elements from initial array that are the same value of the other
arguments supplied.
*/
function destroyer(arr) {
  // Create an array of all values supplied as arguments
  let args = Object.values(arguments); // [[1, 2, 3], 1, 7]
  // Filter supplied array, where each item is not present in `args`
  let new_arr = arr.filter(item => {
      return args.indexOf(item) === -1;
  }); // [2, 3]
  return new_arr;
}

console.log(destroyer([1, 2 ,3], 1, 7)); // [2, 3]