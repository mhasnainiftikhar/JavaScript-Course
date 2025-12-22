const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

// Test Data 1
checkWinner(scoreDolphins1, scoreKoalas1);

// Test Data 2
checkWinner(scoreDolphins2, scoreKoalas2);

