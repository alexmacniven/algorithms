/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
javascript-algorithms-and-data-structures-projects/caesars-cipher

Notes
-----
Let's assume Unicode values;
A   B   C   D   E   F   G   H   I   J   K   L
5   6   7   8   9   10  11  12  13  14  15  16

With a shift of 5 places J(14) -> E(9), but E(9) -> .(4) where it should be
shifted to L(16). Here, when the shift takes the unicode value out of bounds we
need to calculate; 4 + 12 == 16

Let's try with a real values;
A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T
65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84

U   V   W   X   Y   Z
85  86  87  88  89  90

With a shift of 13 places; S(83) -> F(70). An out of bounds shift looks like;
D(68) -> .(55), where it should be D(68) -> Q(81). We need to move 26 places
to arrive at the correct value.
*/
function rot13(str) {
  return str.split("")
    .reduce((previousValue, currentValue) => {
      let char_code = currentValue.charCodeAt(0);
      if (char_code >= 65 && char_code <= 90) {
        let shifted_code = char_code - 13;
        if (shifted_code < 65) {
          shifted_code += 26;
        }
       previousValue += String.fromCharCode(shifted_code);
      } else {
        previousValue += currentValue;
      }
    return previousValue;
  }, "");
}

console.log(rot13("SERR PBQR PNZC"));