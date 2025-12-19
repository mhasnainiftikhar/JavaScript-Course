// ---------------Data 1------------
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// BMI calculation
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight ** 2);

// Comparison
let markHigherBMI = markBMI > johnBMI;

// Output
console.log("Mark BMI=", markBMI);
console.log("John BMI=", johnBMI);
console.log("Does Mark have higher BMI?", markHigherBMI);



//--------------Data 2-----------------------
let markMassTwo = 95;
let markHeightTwo = 1.88;

let johnMassTwo = 85;
let johnHeightTwo = 1.76;

// BMI calculation
let markBMITwo = markMassTwo / (markHeightTwo * markHeightTwo);
let johnBMITwo = johnMassTwo / (johnHeightTwo ** 2);

// Comparison
let markHigherBMITwo = markBMITwo > johnBMITwo;

// Output
console.log("Mark BMI:", markBMITwo);
console.log("John BMI:", johnBMITwo);
console.log("Does Mark have higher BMI?", markHigherBMITwo);
