// --------------- Data 1 ------------
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// BMI calculation
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

// if / else with template literal
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})`);
}

// --------------- Data 2 ------------
let markMassTwo = 95;
let markHeightTwo = 1.88;

let johnMassTwo = 85;
let johnHeightTwo = 1.76;

// BMI calculation
let markBMITwo = markMassTwo / (markHeightTwo ** 2);
let johnBMITwo = johnMassTwo / (johnHeightTwo ** 2);

// if / else with template literal
if (markBMITwo > johnBMITwo) {
  console.log(`Mark's BMI (${markBMITwo.toFixed(1)}) is higher than John's (${johnBMITwo.toFixed(1)})`);
} else {
  console.log(`John's BMI (${johnBMITwo.toFixed(1)}) is higher than Mark's (${markBMITwo.toFixed(1)})`);
}

