'use strict';

var points = 0;

// Question 1: Siblings
var siblings = prompt('Do you think Sharina has siblings?');
siblings = siblings.toLowerCase();
if (siblings === 'yes' || siblings === 'y') {
  alert('Oooh, that\'s correct! Sharina has a sister!');
  points += 1;
} else {
  alert('Awww, nice try. Sharina actually does have siblings');
}
console.log('Answer 1: Yes, Sharina has siblings');

// Question 2: Space Needle
var spaceNeedle = prompt('Do you think Sharina visited the top of the Space Needle?');
spaceNeedle = spaceNeedle.toLowerCase();
if (spaceNeedle === 'no' || spaceNeedle === 'n') {
  alert('Great guess! You are absolutely correct: Sharina has never been to the top of the Space Needle.');
  points += 1;
} else {
  alert('Weirdly enough, Sharina has actual never been to the top of the Space Needle. Keep trying!');
}
console.log('Answer 2: No, Sharina has not visited the top of the Space Needle.');

// Question 3: Australia
var visitAustralia = prompt('Would you guess that Sharina has been to Australia?');
visitAustralia = visitAustralia.toLowerCase();
if (visitAustralia === 'yes' || visitAustralia === 'y') {
  alert('Yes, is the correct answer! Sharina has been to Sydney, Australia... twice!');
  points += 1;
} else {
  alert('Sorry, that\'s not correct. Sharina actually has been to Australia!');
}
console.log('Answer 3: Yes, Sharina has been to Australia');

// Question 4: Music Major
var musicMajor = prompt('Do you think Sharina was a music major in undergrad?');
musicMajor = musicMajor.toLowerCase();
if (musicMajor === 'yes' || musicMajor === 'y') {
  alert('Yes is correct! Sharina played string bass, was a composer, and ended up majoring in music');
  points += 1;
} else {
  alert('Whoops, that\'s not correct! Sharina really was a music major!');
}
console.log('Answer 4: Yes, Sharina was a music major');

// Question 5: Caribbean Life
var caribbean = prompt('Do you think Sharina has lived in the Caribbean?');
caribbean= caribbean.toLowerCase();
if (caribbean === 'yes' || caribbean === 'y') {
  alert('Hey, good guessing skills! Sharina lived on an island that was 5 square miles, near St. Martin!');
  points += 1;
} else {
  alert('Oh sad, you missed that one. Sharina did call the Caribbean home for a while.');
}
console.log('Answer 5: Yes, Sharina lived in the Caribbean.');

// Question 6: Sailing to Hawaii with numeric input with 4 tries
var responseAttempts = 0;

while (responseAttempts < 5){
  var hawaiiSailing = parseInt(prompt('How many times do you suppose Sharina has sailed from Canada to Hawaii? You have 5 guesses!'));

  if (hawaiiSailing === 2) {
    alert('Twice is correct! She was sailed from Victoria BC to Maui in 2012 and 2014.');
    points += 1;
    break;
  } else if (hawaiiSailing < 2) {
    alert('Try a little higher');
    responseAttempts += 1;
  } else if (hawaiiSailing > 2) {
    alert('Try a little lower');
    responseAttempts += 1;
  } else {
    alert('Please re-try with a number.');
  }
}





// Score Card
var totalScore = document.getElementById('score');
var maxPoints = ' out of 6 questions correctly!';
if (points > 3) {
  totalScore.textContent = 'Rock Star! You guessed ' + points + maxPoints;
} else if (points < 2) {
  totalScore.textContent = 'It was a valiant try. You guessed '+ points + maxPoints;
} else {
  totalScore.textContent = 'Nice job! You guessed ' + points + maxPoints;
}


