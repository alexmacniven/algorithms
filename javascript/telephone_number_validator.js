/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
javascript-algorithms-and-data-structures-projects/telephone-number-validator

Notes
-----
Here are the valid telephone number formats;
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Let's work backwards through the formats and build an expression satisfying
them all;
- Ends in 4 digits
- 1 or less instances of '-' or ' '
- 3 instances of digits
- 1 or less instances of '-' or ' '
- 1 instance of ['(' 3 instances of digits ')']  or 3 instances of digits 
- 1 or less instances of '1 ' or '1'

We can build a regex from the criteria above;
/^(1 |1)*(\(\d{3}\)|\d{3})(-|\s)*\d{3}(-|\s)*\d{4}$/
*/
function telephoneCheck(str) {
  let regex = /^(1 |1)*(\(\d{3}\)|\d{3})(-|\s)*\d{3}(-|\s)*\d{4}$/;
  return regex.match(str);
}