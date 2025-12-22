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
