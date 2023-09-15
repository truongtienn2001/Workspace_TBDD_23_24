// Function to calculate the tip based on bill value
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// Test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arrays to store tips and totals
const tips = [];
const totals = [];

// Calculate tips and totals for each bill
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log('Tips:', tips);
console.log('Totals:', totals);

// Function to calculate the average of an array
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// Calculate and log the average of the 'totals' array
const averageTotal = calcAverage(totals);
console.log(`Average Total: ${averageTotal}`);
