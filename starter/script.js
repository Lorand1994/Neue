'use strict';

// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 21;

// document.querySelector('.guess').value = 10;

let snumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highescore = 0;
const displayM = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 NO number!';
    displayM('🛑 NO number!');
  } else if (guess === snumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayM('🥳 Correct Number!');
    document.querySelector('.number').textContent = snumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highescore) {
      highescore = score;
      document.querySelector('.highscore').textContent = highescore;
    }
  } else if (guess !== snumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > snumber ? 'To high 👠' : 'To Low 👠';
      displayM(guess > snumber ? 'To high 👠' : 'To Low 👠');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 😝';
      displayM('You lost the game 😝');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayM('Start guessing...');
  score = 20;
  snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
});
