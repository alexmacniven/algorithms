/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/
// Maps a roman numeral to it's numeric value.
const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

// Creates a map between the columns index and the values used to create it.
// I.E.: Connects the value at column index 1 to numerals C, D, and M. That is,
// the 'hundreds' are calculated using a combination of 100, 500, and 1000.
const column_ranges = {
  1: [4, 5, 6],
  2: [2, 3, 4],
  3: [0, 1, 2]
}

// Shortcut to the numeral keys and values.
const roman_keys = Object.keys(romans);
const roman_vals = Object.values(romans);

function convertFromRoman(num) {
  let array = num.split("");
  let result = 0;
  for (let idx = array.length - 1; idx >= 0; idx--) {
    let base = romans[array[array.length - 1]];
    let current = romans[array[idx]];
    if (current >= base) {
      result += current;
    }
    else {
      result -= current;
    }
  }
  return result;
}

function convertToRoman(num) {
  // Break down the supplied number into thousands, hundreds, tens, and units.
  let numbers = num.toString()
    .split("")
    .reverse();
  let multiplier = [1, 10, 100, 1000];
  let columns = numbers.reduce((acc, value, index) => {
    let n = parseInt(value * multiplier[index]);
    acc.unshift(n)
    return acc;  
  },[]);

  // Front fill the columns array with 0's.
  while (columns.length < 4) {
    columns.unshift(0);
  }

  // Convert each number in columns to it's roman numeral.
  let numerals = columns.map((value, index) => {
    return convertColumn(value, index)
  });

  // Join numerals together as a string and return.
  return numerals.join("");
}

function convertColumn(value, index) {
  // Return empty string when value is 0.
  if (value === 0) {
    return "";
  }

  // Thousands have an upper limit of 3, so we can take a shortcut and return 
  // 'M' for each thousand.
  if (index === 0) {
    let str = "";
    for (let i = 0; i < value / 1000; i++) {
      str += "M"
    }
    return str;
  }
  
  // Reference the keys(numerals) and values(numbers) we'll be using.
  let low_key = roman_keys[column_ranges[index][0]];
  let low_val = roman_vals[column_ranges[index][0]];
  let mid_key = roman_keys[column_ranges[index][1]];
  let mid_val = roman_vals[column_ranges[index][1]];
  let hii_key = roman_keys[column_ranges[index][2]];
  let hii_val = roman_vals[column_ranges[index][2]];

  if (value < mid_val) {
    switch(value) {
      case low_val: 
        return low_key;
      case low_val * 2:
        return `${low_key}${low_key}`;
      case low_val * 3:
        return `${low_key}${low_key}${low_key}`;
      default:
        return `${low_key}${mid_key}`;    
    }
  } else if (value > mid_val) {
    switch(value) {
      case hii_val:
        return hii_key;
      case mid_val + low_val:
        return `${mid_key}${low_key}`;
      case mid_val + low_val * 2:
        return `${mid_key}${low_key}${low_key}`;
      case mid_val + low_val * 3:
        return `${mid_key}${low_key}${low_key}${low_key}`;
      default:
        return `${low_key}${hii_key}`;      
    }
  } else {
    return mid_key;
  }
}

console.log(convertToRoman(97));
