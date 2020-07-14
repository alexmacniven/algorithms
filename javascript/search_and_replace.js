/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

Perform a string replace whilst maintaining original string case.
*/
function myReplace(str, before, after) {
  let new_after;
  let upper_case_reg = /^[A-Z]/;
  // Test `before` starts with upper case
  if (upper_case_reg.test(before)) {
    // Split `after` into characters...
    let after_arr = after.split("");
    // ...convert first character to uppercase...
    after_arr[0] = after_arr[0].toUpperCase();
    // ...join back together
    new_after = after_arr.join("");
  } else {
    new_after = after;
  }
  return str.replace(before, after)
}

let result = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
console.log(result)