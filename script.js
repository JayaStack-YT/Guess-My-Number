'use strict';

// document.querySelector('.message').textContent = 'Correct Number 🎉'

let Score = 20;
let UpScore = 0;

 document.querySelector('.score').textContent = Score;

const Secretnumber = Math.floor(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When Plyer no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';
  }

  // When Plyer Wins;
  else if (guess === Secretnumber && Score > UpScore) {
    document.querySelector('.message').textContent = 'Wow Corect Number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
   document.querySelector('.number').textContent = Secretnumber;
    // document.querySelector('body').style.width = '30rem';
  
     document.querySelector('.highscore').textContent = Score;



  } else if (guess > Secretnumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = 'Too High 📈';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = '☠ You Lost The Game 💀';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < Secretnumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = 'Too Low 📉';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game ☠💀';
      document.querySelector('.score').textContent = 0;
      
    }
  }
});



//Reset Funtion 

document.querySelector('.again').addEventListener('click', function() {


    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Gussing...🧐';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});