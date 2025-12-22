// Test data
let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
let total = bill + tip;

// Output using template literal
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
