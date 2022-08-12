'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 5; //empty box

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let Displaytext = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // console.log(
    //   (document.querySelector('.message').textContent = 'This is No number')
    // );
    Displaytext('This is No number');
  } else if (guess === secretNumber) {
    // console.log(
    //   (document.querySelector('.message').textContent = 'Amazing! you Guess!')
    // );
    Displaytext('Amazing! You Guess!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.highscore').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      Displaytext(guess > secretNumber ? 'Its High number' : 'Its Low number');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //  document.querySelector('.message').textContent = 'You Loose game!';
      Displaytext('You Loose game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector('.message').textContent = 'Its High number')
  //       );
  //       score--;

  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       console.log(
  //         (document.querySelector('.message').textContent = 'You Loose game!')
  //       );
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector('.message').textContent = 'Its Low number')
  //       );
  //       score--;

  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       console.log(
  //         (document.querySelector('.message').textContent = 'You Loose game!')
  //       );
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.message').textContent = 'Start Guessing....';
  Displaytext('Start guessing....');
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
