/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

An array of 2 numbers is passed, the sum of the 2 numbers plus all the numbers
between is to  be returned.
*/
function sumAll(arr) {
  let result = 0;
  let sorted_arr = arr.sort((a, b) => a - b);
  for (let i = sorted_arr[0]; i <= sorted_arr[1]; i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([4, 1])); // 10