$(document).ready(function () {
  //document.getElementById('timer').innerHTML = setInterval(() => this.clock = Date.now(), 1000);
  // gives the user one minute to complete the quiz
  var timeLeft = 60;
  const runTimer = function () {
    // first checks to see the timer hasn't already expird before running the function again
    if (timeLeft >= 0) {


      displayTime();
      timeLeft = timeLeft - 1;
      //backs out of functions if timer hits 0 while running
      if (timeLeft === 0) {
        return;
      }
    }
  };

  var displayTime = function () {
    // attaches the timer to the HTML 
    document.getElementById('timer').innerHTML = timeLeft;

  };
  // runs the timer every second
  setInterval(runTimer, 1000);
  // keeps track of the finishing score
  var totalScore = 0;
  // keeps track of the current score the user has
  var currentScore = 0;
  // keeps track of how many wrong guesses the user had
  var totalWrong = 0;

  // runs whenver a radio button with the correct class gets selceted 
  var selectCorrectAnswer = function () {
    currentScore = currentScore + 1;
    console.log("The total correct is currently " + currentScore);
  };
  // runs wheneve a radio button with the incorrect class gets selected
  var selectWrongAnswer = function () {
    totalWrong = totalWrong + 1;
    console.log("The total wrong is currently " + totalWrong);
  };

  // when a button with the correct class gets clicked, it calls the corresponding function 
  $('.correct').on('click', selectCorrectAnswer);
  // when a button with the wrong class gets clicked, it calls the corresponding function 
  $('.wrong').on('click', selectWrongAnswer);


  //logic for ending the game including checking to see if the timer has hit zero
var endGame = function () {
  if (timeLeft === 0) {

  };
};


});
