/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
javascript-algorithms-and-data-structures-projects/cash-register

Notes
-----
- There are two quick exits;
  - When the total cash draw is equal to the total change due
  - When the total cash draw is less than the total change due
- Calculate how much change is needed
- Reverse iterate over cash draw removing available change where available
- When all denominations have been handled;
  - Return OPEN when all change is given
  - Return INSUFFICIENT when change could not be met

Implemented `fixedFloat` to handle floating point number rounding
*/

const cash_map = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

const cash_keys = Object.keys(cash_map);

function fixedFloat(num) {
  let a = num.toFixed(2);
  return parseFloat(a);
}

function checkCashRegister(price, cash, cid) {
  // Objectify cid
  let cid_obj = Object.fromEntries(cid);
  let cid_values = Object.values(cid_obj);
  let cid_total = fixedFloat(cid_values.reduce((acc, elem) => acc + elem, 0.0));

  // Calculate total change required
  let total_change = fixedFloat(cash - price);
  // When total cash in draw is equal to the change due, return 'CLOSED'
  if (cid_total == total_change) {
    return {status: "CLOSED", change: cid}
  // When total cash in draw is less than change due, return 'INSUFFICIENT.'
  } else if (cid_total < total_change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}; 
  }

  // At this stage, there is enough cash in draw to return change

  // Create empty change array
  let change_array = [];
  
  // Reverse iterate over cash_keys elements; ONE HUNDRED, TWENTY, TEN, ...
  for (let idx = cash_keys.length - 1; idx >= 0; idx--) {
    // These are variables for the current key; TWENTY
    let current_key = cash_keys[idx];
    // ...and the demonination; 20
    let current_denonimation = fixedFloat(cash_map[current_key]);
    if (current_denonimation <= total_change) {
      // Total count of demonination taken out of cash draw
      let denonimation_count = 0.0;
      // Total count of demonination still in cash draw
      let cid_count = cid_obj[current_key]
      while (current_denonimation <= total_change &&  cid_count > 0.0) {
        // Remove one demonination from total change needed
        total_change = fixedFloat(total_change - current_denonimation);
        // Increase demonination taken from cash draw
        denonimation_count = fixedFloat(denonimation_count + current_denonimation);
        // Decrease demonination left in cash draw
        cid_count = fixedFloat(cid_count - current_denonimation);
      }
      // Add demonination to running change array
      change_array.push([current_key, denonimation_count]);
    }
  }
  // Where all change is met, return 'OPEN'
  if (total_change == 0) {
    return {status: "OPEN", change: change_array};
  // Where there isn't enough change in cash draw, return 'INSUFFICENT.'
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};   
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));