var scores, roundScore, activePlayer;

// use an array to create the scores instead of creating 2 different variables for each of the player's scores
scores = [0, 0];
// one roundscore at a time 
roundScore = 0;
// activePlayer to show which player's it is because 0 is player 1 and 1 is player 2
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// DOM manipulation
// querySelector() lets us select stuff the exact way we do it in css 
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// callback function called by the event listener 
document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. random number dice roll
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    var dicecDOM = document.querySelector('.dice');
    dicecDOM.style.display = 'block';
    dicecDOM.src = './images/dice' + dice + '.png';

    // 3. update the round score IF the rolled number was NOT a 1 
    if (dice !== 1) {
        // add score
        // equal to roundScore = rouncScore + dice;
        roundScore += dice;
        // after player rolls the dice, you want to update the roundScore and then display it in the UI
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        // or go to the next player with a ternary statement
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        // }
        // else {
        //     activePlayer = 0;
        // }
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }
});

    document.querySelector('.btn-hold').addEventListener('click', function() {
        // add current score to global score
        scores[activePlayer] += roundScore;
        scores[activePlayer] = scores[activePlayer] + roundScore;
        // update the UI 

        // check if player won the game

    }); 