// Function to calculate the tip based on bill value
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
  
  // Test the function with a bill value of 100
  const testBill = 100;
  const tipForTestBill = calcTip(testBill);
  console.log(`The tip for a bill of ${testBill} is ${tipForTestBill}`);
  
  // Array of bill values
  const bills = [125, 555, 44];
  
  // Calculate tips for each bill and store them in an array
  const tips = bills.map((bill) => calcTip(bill));
  
  // Calculate total values (bill + tip) for each bill and store them in an array
  const totals = bills.map((bill, index) => bill + tips[index]);
  
  console.log('Bill Values:', bills);
  console.log('Tips:', tips);
  console.log('Total Values:', totals);
  