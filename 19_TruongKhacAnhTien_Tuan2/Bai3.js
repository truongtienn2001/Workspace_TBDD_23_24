// Test Data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Function to calculate average score
const calculateAverage = (scores) => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
};

// Calculate average scores for both teams
const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

// Bonus 1: Check for minimum score of 100
if (dolphinsAverage >= 100 && koalasAverage >= 100) {
  // Compare average scores to determine the winner
  if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins win with a higher average score!");
  } else if (koalasAverage > dolphinsAverage) {
    console.log("Koalas win with a higher average score!");
  } else {
    console.log("It's a draw!");
  }
} else {
  console.log("No team wins the trophy. Both teams need a minimum score of 100.");
}
