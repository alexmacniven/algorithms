/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

I used an object instance to create a lookup map for each element, then split
the argument str into an array. I then used Array.prototype.map to iterator
over each item in the array and build an array containing the original element
and the result of it's lookup.
*/
function pairElement(str) {
  let elem_map = {
    A : "T",
    T : "A",
    C : "G",
    G : "C"
  }
  let elems = str.split("");
  let elem_arr = elems.map((elem) => [elem, elem_map[elem]]);
  return elem_arr;
}

console.log(pairElement("GCG"));