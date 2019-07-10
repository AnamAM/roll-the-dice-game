var scores, roundScore, activePlayer, gamePlaying;

init();

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


// callback function called by the event listener 
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

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
            // next players turn
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        // add current score to global score
        scores[activePlayer] += roundScore;
        // update the UI and dynamically update the scores for the active player 
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= 10) {
            document.getElementById("name-" + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // toggle adds the class if it's not there and removes it if it's already there
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// calling the init function when the 'new game' button is clicked
document.querySelector('.btn-new').addEventListener('click', init);

// init function to initialize the game
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying =

        document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    // don't want any players to be active after initializing the game
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // adding the active class back to player 1 because the game restarts with player 1 
    document.querySelector('.player-0-panel').classList.add('active');
}   