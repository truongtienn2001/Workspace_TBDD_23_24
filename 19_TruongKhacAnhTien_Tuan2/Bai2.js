// BMI Calculation
const markWeight = 78; // kg
const markHeight = 1.69; // meters
const johnWeight = 92; // kg
const johnHeight = 1.95; // meters

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
  console.log(`Both Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
}
