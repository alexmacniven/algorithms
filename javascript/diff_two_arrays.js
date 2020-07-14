/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

Find the symmetric difference of two arrays. 
That is, return an array of elements that are in one array, but not the other.
*/
function diffArray(arr1, arr2) {
  // Create array `new_arr` of items in `arr1` but not in `arr2` 
  let newArr = arr1.filter(elem => arr2.indexOf(elem) === -1);
  // Concat `new_arr` with items in `arr2` but not in `arr1`
  return newArr.concat(arr2.filter(elem => arr1.indexOf(elem) === -1));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
