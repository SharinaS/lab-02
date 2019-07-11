'use strict';

var points = 0;

// Request for name
var userName = prompt('What is your first name?');
alert('Hi, ' + userName + '! Let\'s see what you can guess about Sharina!');


// Question 1: Siblings
function siblingQuestion() {
  var siblings = prompt(userName + ', Do you think Sharina has siblings?');
  siblings = siblings.toLowerCase();
  if (siblings === 'yes' || siblings === 'y') {
    alert('Oooh, that\'s correct! Sharina has a sister!');
    points++;
  } else {
    alert('Awww, nice try, ' + userName + ' Sharina actually does have siblings');
  }
  console.log('Answer 1, var siblings, Yes, Sharina has siblings');
}




// Question 2: Space Needle
function spaceNeedleQuestion() {
  var spaceNeedle = prompt('Do you think Sharina visited the top of the Space Needle?');
  spaceNeedle = spaceNeedle.toLowerCase();
  if (spaceNeedle === 'no' || spaceNeedle === 'n') {
    alert('Great guess! You are absolutely correct: Sharina has never been to the top of the Space Needle.');
    points++;
    console.log('Answer 2, var spaceNeedle, No, Sharina has not visited the top of the Space Needle.');
  } else {
    alert('Weirdly enough, Sharina has actual never been to the top of the Space Needle. Keep trying!');
    console.log('the user guessed incorrectly', spaceNeedle);
  }
}



// Question 3: Australia
var visitAustralia = prompt('Would you guess that Sharina has been to Australia?');
visitAustralia = visitAustralia.toLowerCase();
if (visitAustralia === 'yes' || visitAustralia === 'y') {
  alert('Yes, is the correct answer! Sharina has been to Sydney, Australia... twice!');
  points++;
  console.log('Answer 3, var visitAustralia, Yes, Sharina has been to Australia');
} else {
  alert('Sorry, that\'s not correct. Sharina actually has been to Australia!');
  console.log('user guessed incorrectly', visitAustralia);
}


// Question 4: Music Major
var musicMajor = prompt('Do you think Sharina was a music major in undergrad?');
musicMajor = musicMajor.toLowerCase();
if (musicMajor === 'yes' || musicMajor === 'y') {
  alert('Yes is correct! Sharina played string bass, was a composer, and ended up majoring in music');
  points++;
  console.log('Answer 4, var musicMajor, Yes, Sharina was a music major');
} else {
  alert('Whoops, that\'s not correct! Sharina really was a music major!');
  console.log('user guessed incorrectly', musicMajor);
}


// Question 5: Caribbean Life
var caribbean = prompt('Do you think Sharina has lived in the Caribbean?');
caribbean = caribbean.toLowerCase();
if (caribbean === 'yes' || caribbean === 'y') {
  alert('Hey, good guessing skills! Sharina lived on an island that was 5 square miles, near St. Martin!');
  points++;
  console.log('Answer 5, var caribbean, Yes, Sharina lived in the Caribbean ' + caribbean);
} else {
  alert('Oh sad, you missed that one. Sharina did call the Caribbean home for a while.');
  console.log('user guessed incorrectly', caribbean);
}


// Question 6: Sailing to Hawaii with numeric input with 4 tries
var responseAttempts = 0;

while (responseAttempts < 4) {
  var hawaiiSailing = parseInt(prompt('How many times do you suppose Sharina has sailed from Canada to Hawaii? You have 4 guesses!'));

  if (hawaiiSailing === 2) {
    alert('Twice is correct! She was sailed from Victoria BC to Maui in 2012 and 2014.');
    points++;
    break;
  } else if (hawaiiSailing < 2) {
    alert('Try a little higher');
    responseAttempts++;
  } else if (hawaiiSailing > 2) {
    alert('Try a little lower');
    responseAttempts++;
  } else {
    alert('Please re-try with a number.');
  }
}
console.log('Answer 6, var hawaiiSailing, Sharina sailed from Canada to Hawaii twice');



// Question 7: Discover one of several places I've lived in.
var statesLived = ['massachussets', 'ma', 'new york', 'ny', 'california', 'ca', 'minnesota', 'mn'];
var guessNum = 0;
var correct = false;

while (guessNum < 6 && correct === false) {

  var stateGuess = prompt('Can you name a state Sharina has lived in, besides Washington?');
  stateGuess = stateGuess.toLowerCase();

  for (var i = 0; i < statesLived.length; i++) {
    if (statesLived[i] === stateGuess) {
      console.log('I am in the correct answer if statment with ' + statesLived[i]);
      alert('Yes! Sharina has lived in Massachussets, New York, California, and Minnesota');
      points += 1;
      correct = true;

    }
  }

  if (correct === false) {
    console.log('I am in the incorrect or else statement with ' + statesLived[i]);
    alert('Good try, but either check your spelling or try again!');
    guessNum += 1;
  }
}


//Score Card
alert('Go check your score on the main page!');

var totalScore = document.getElementById('score');
var maxPoints = ' out of 7 questions correctly!';

if (points > 3) {
  totalScore.textContent = 'You\'re a Rock Star, ' + userName + '! You guessed ' + points + maxPoints;
} else if (points < 2) {
  totalScore.textContent = 'It was a valiant try, ' + userName + '. You guessed ' + points + maxPoints;
} else {
  totalScore.textContent = 'Nice job' + userName + '! You guessed ' + points + maxPoints;
}

siblingQuestion();
spaceNeedleQuestion();
