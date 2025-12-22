const calcAverage = (a, b, c) => (a + b + c) / 3;

// Data 
let dolphinsAvg = calcAverage(96, 108, 89);
let koalasAvg = calcAverage(88, 91, 110);

console.log("Dolphins Average:", dolphinsAvg);
console.log("Koalas Average:", koalasAvg);

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win the trophy...");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas win the trophy ..");
} else {
  console.log("It's a draw ..");
}

// Bonus 1
let dolphinsAvgBonus1 = calcAverage(97, 112, 101);
let koalasAvgBonus1 = calcAverage(109, 95, 123);

console.log("Dolphins Average:", dolphinsAvgBonus1);
console.log("Koalas Average:", koalasAvgBonus1);

if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
  console.log("Dolphins win the trophy ");
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
  console.log("Koalas win the trophy ");
} else {
  console.log("No team wins the trophy ");
}

// Bonus 2
let dolphinsAvgBonus2 = calcAverage(97, 112, 101);
let koalasAvgBonus2 = calcAverage(109, 95, 106);

console.log("Dolphins Average:", dolphinsAvgBonus2);
console.log("Koalas Average:", koalasAvgBonus2);

if (
  dolphinsAvgBonus2 > koalasAvgBonus2 &&
  dolphinsAvgBonus2 >= 100
) {
  console.log("Dolphins win the trophy ");
} else if (
  koalasAvgBonus2 > dolphinsAvgBonus2 &&
  koalasAvgBonus2 >= 100
) {
  console.log("Koalas win the trophy ");
} else if (
  dolphinsAvgBonus2 === koalasAvgBonus2 &&
  dolphinsAvgBonus2 >= 110 &&
  koalasAvgBonus2 >= 100
) {
  console.log("It's a draw ");
} else {
  console.log("No team wins the trophy ");
}
