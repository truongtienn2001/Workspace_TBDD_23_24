// Select the 'again' button element
const againButton = document.querySelector('.again');

// Function to reset the game
const resetGame = () => {
  // Restore initial values
  score = 20;
  secretNumber = generateRandomNumber();
  
  // Restore initial conditions
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  
  // Restore background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// Attach a click event handler to the 'again' button
againButton.addEventListener('click', resetGame);

// Call the resetGame function to initialize the game
resetGame();
