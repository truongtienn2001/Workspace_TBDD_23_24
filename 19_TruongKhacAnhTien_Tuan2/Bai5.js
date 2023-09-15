// Function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Function to check the winner based on average scores
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

// Test Data 1
const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;
const koalasScore1 = 65;
const koalasScore2 = 54;
const koalasScore3 = 49;

const avgDolphins1 = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const avgKoalas1 = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(avgDolphins1, avgKoalas1);

// Test Data 2
const dolphinsScore4 = 85;
const dolphinsScore5 = 54;
const dolphinsScore6 = 41;
const koalasScore4 = 23;
const koalasScore5 = 34;
const koalasScore6 = 27;

const avgDolphins2 = calcAverage(dolphinsScore4, dolphinsScore5, dolphinsScore6);
const avgKoalas2 = calcAverage(koalasScore4, koalasScore5, koalasScore6);

checkWinner(avgDolphins2, avgKoalas2);
