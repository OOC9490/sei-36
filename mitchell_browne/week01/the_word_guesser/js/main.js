// --- FUNCTIONS ---

// Function to ask for word from user and output array
const wordInput = function() {
  let wordArray = [];
  let wordInput = prompt('What word will you hand the man with?');
  return wordArray = wordInput.toUpperCase().split('');
}

// Function to run the game
const game = function() {
  console.log(`Guess this ${array.join()} (${word.length}) word to save your man.`)
  while (state) {
    let letter = prompt('Guess a letter');
    guessLetter(letter);
  }
  return;
}

// Function to test each letter guessed
const guessLetter = function(letterGuessed) {
  turn += 1;
  console.log(`---- Turn #${turn} | Reward $${reward} ----`);
  const letter = letterGuessed.toUpperCase();

  if (arrayGuessed.indexOf(letter) >= 0) {
    console.log(`${letter} has already been guessed. Try again.`);
    turn -= 1;
    return;
  }

  arrayGuessed.push(letter);

  if (word.indexOf(letter) >= 0) {
    for (let i = word.indexOf(letter)+1; i < word.length; i++) {
      if (word[i] === letter) {
        array[i] = letter;
        correctGuess += 1;
      }
    }
    array[word.indexOf(letter)] = letter;
    correctGuess += 1;
    console.log(`You found the letter ${letter}! Add $${rewarded()} to your reward.`)
    console.log(array.join());
    console.log(message());
  } else {
    incorrectGuess += 1;
    console.log(`${letter} is incorrect. Hangman has ${limbCheck()} more limbs left.`);
    if (limbs == 0) {
      gameOver();
    }
  }
};

// Function to update reward and return reward message
const rewarded = function() {
  // reward becomes exponentially bigger as correctGuesses get bigger (correctGuess ** 2)
  const randomReward = Math.ceil((Math.random() + 0.5) * Math.floor((correctGuess * (correctGuess + 1)) * 10));
  reward += randomReward;
  return randomReward;
}

// Function to return correct guess message
const message = function() {
  const remaining = word.length - correctGuess;
  let message;
  if (remaining > 1) {
    return message = `You have ${remaining} letters remaining and man has ${limbs} more limbs left.`;
  } else if (remaining === 1) {
    return message = `You have ${remaining} letter remaining and man ${limbs} more limbs left.`;
  } else {
    state = false;
    return message = `Congratulations! You completed the hangman! You get to take home your $${reward} reward!`;
  }
};

const limbCheck = function() {
  limbs = 6 - incorrectGuess;
  return limbs;
}

// Function when player has too many tries, end game
const gameOver = function() {
  state = false;
  console.log(`Too many wrong guesses!`);
  console.log(`You leave me no choice but to throw away your $${reward} reward and...`);
  console.log(`...OFF WITH YOUR HEAD!`);
  console.log(`    _    `);
  console.log(` /     \\`);
  console.log(`| X   X |`);
  console.log(` \\  o  /    splat`);
  console.log(`   | |`);
}

// --- GLOBAL VARIABLES ---
const word = wordInput();
const array = [];
// for strings only: let string = "_".repeat(word.length);
for (i = 0; i < word.length; i++) {
  array.push('_');
}
const arrayGuessed = [];
let correctGuess = 0;
let incorrectGuess = 0;
let turn = 0;
let state = true;
let reward = 0;
let limbs = 6;

// --- TEST ---
game();
