let randomNumber = parseInt(Math.random() * 100 + 1); //Calculate randome number as randome function generate between
//1 to 10 so it multiply by 100 and dont need 0 so add 1

const submit = document.querySelector('#subt'); //as we need this eleemnt so use dom to select submit eleemnt
const userInput = document.querySelector('#guessField'); //select userinput field eleemnt by dom
const guessSlot = document.querySelector('.guesses'); //select paragraph elelmnt by dom for showing previous guesses
const remaining = document.querySelector('.lastResult'); //select reamaining guess paragraph  elemnt by dom
const lowOrHi = document.querySelector('.lowOrHi'); //select paragraphp elemnt
const startOver = document.querySelector('.resultParas'); //acess  div element where whole things input ,submit button is lie

const p = document.createElement('p'); //create specified html element dynamically 

let prevGuess = []; //this array is empty becuase in initial no input has been given, as input is given by user, value pushes into it
let numGuess = 1;
// if playgame flag is true,on click of submit click function enablesand form default submisiion is avoided as we have no need to send form data to browser,server
// then value is extracted from userinput field .call validateguess function to check whether input provided is number or it is not
// if user input value is correct just push that value in previousguess array, also track whether userinput vaule or guess is more than 10 times ,if it is display all guesses also display random number and end game function call
// and if userinput is less than 10 just display guess number and check guess and say guesss is too low or high

// 
let playGame = true; //set flag true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}
//this function just blank userinput and add in guessslot also increase num guessses to 1.and updating remaining guess left by user

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
// this function calls when check guess calls to display user input is too low  or high
function endGame() {
    userInput.value = ''; //set input field value blank
    userInput.setAttribute('disabled', ''); //setAttribute called for disable 
    p.classList.add('button'); //add button class to paragraphp ellemnt
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; //then add content start new game to paragra[h elemt]
    startOver.appendChild(p); //and append paragraph elemnt to resultparas class of div elemnt
    playGame = false;
    newGame(); //start new game
}

function newGame() {
    const newGameButton = document.querySelector('#newGame'); //selct start new game paragraph elelmnt
    newGameButton.addEventListener('click', function(e) { //apply click function so that when user click on start new game it function
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}