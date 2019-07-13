'use strict';

/*
var points = 0;
var userName;

// Request for name
function nameRequest() {
  userName = prompt('What is your first name?');
  alert('Hi, ' + userName + '! Let\'s see what you can guess about Sharina!');
}


// Questions 1-5: siblings, space needle, australia, major in college, caribbean
var questions = ['Do you think Sharina has siblings?', 'Do you think Sharina visited the top of the Space Needle?', 'Would you guess that Sharina has been to Australia?', 'Do you think Sharina was a music major in undergrad?', 'Do you think Sharina has lived in the Caribbean?'];

var yesResponses = ['Oooh, that\'s correct! Sharina has a sister!', 'Weirdly enough, Sharina has actual never been to the top of the Space Needle. Keep trying!', 'Yes, is the correct answer! Sharina has been to Sydney, Australia... twice!', 'Yes is correct! Sharina played string bass, was a composer, and ended up majoring in music', 'Hey, good guessing skills! Sharina lived on an island that was 5 square miles, near St. Martin!'];


function findAnswers() {
  for (var i = 0; i < questions.length; i++) {
    var userInput = prompt(questions[i]);
    if (i === 1) {
      if (userInput === 'no' || userInput === 'n') {
        alert(yesResponses[1]);
        points++;
      } else {
        alert('Wrong Answer!');
      }
    } else if (userInput === 'yes' || userInput === 'y') {
      alert(yesResponses[i]);
      points++;
    } else {
      alert('Wrong Answer!');
    }
  }
}


// Question 6: Sailing to Hawaii with numeric input with 4 tries
function sailingTimes() {
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

}

// Question 7: Discover one of several places I've lived in.
function homeStates() {
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
}

//Score Card
function scoreCard() {
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
}

nameRequest();
findAnswers();
sailingTimes();
homeStates();
scoreCard();

*/
