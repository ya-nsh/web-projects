let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, compGuess, targetNum) => {
  let userDifference = Math.abs(targetNum - userGuess);
  let compDifference = Math.abs(targetNum - compGuess);
  return userDifference <= compDifference;
};

const updateScore = (score) => {
  if (score === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
