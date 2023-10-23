'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');

let player0 = 0;
let player1 = 1;
let currentScore0 = 0;
let currentScore1 = 0;
let currentPlayer = player0;
let dice;
let score0 = 0;
let score1 = 0;
function switchCurrent() {
    if (currentPlayer === player0) {
        currentPlayer = player1;
        console.log(currentPlayer);
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    } else {
        currentPlayer = player0;
        console.log(currentPlayer);
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}
function randomDiceGen() {
    dice = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `./assets/dice-${dice}.png`
    scoreUpdater(dice);
}

function scoreUpdater() {
    if (dice != 1) {
        if (currentPlayer === player0) {
            currentScore0 += dice;
            current0El.textContent = currentScore0;
        } else {
            currentScore1 += dice;
            current1El.textContent = currentScore1;
        }
    } else {
        switchCurrent();
        currentScore0, currentScore1 = 0;
    }
}

function holdScore() {
    if (currentPlayer === player0) {
        score0 += currentScore0;
        score0El.textContent = score0;
        currentScore0 = 0;
        if (score0 >= 100) {
            player0El.classList.toggle('player--winner')
        }
    } else {
        score1 += currentScore1;
        score1El.textContent = score1;
        currentScore1 = 0;
        if (score1 >= 100) {
            player1El.classList.toggle('player--winner')
        }
    }
    switchCurrent();
}
function newGame() {
    location.reload();
}
rollBtn.addEventListener('click', randomDiceGen);
holdBtn.addEventListener('click', holdScore);
newGameBtn.addEventListener('click', newGame);
