'use strict'
// instantiate variables
let secretNumber = Math.trunc(Math.random()*20)+1;      // generate random int
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is not input
    if(!guess)
        displayMessage('no number');
    else if(guess===secretNumber){
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#1AD0BAFF';    // color of background
        document.querySelector('number').style.width = '30rem';                // relative element

        if(score>1){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? 'too high a guess':'too low a guess');
        }else{
            displayMessage('You lost the game bozo');
            document.querySelector('.score').textContent=0;
        }
    }
});
// event listener for the again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '??';
    document.querySelector('.guess').value = ' ';

    // reset the background color
    document.querySelector('.body').style.backgroundColor=('#222');
    document.querySelector('.number').style.width = '15rem';
});


