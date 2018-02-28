$(document).ready(function () {
  //document.getElementById('timer').innerHTML = setInterval(() => this.clock = Date.now(), 1000);

  var timeLeft = 59;
  const runTimer = function () {
    if (timeLeft >= 0) {


      displayTime();
      timeLeft = timeLeft - 1;
      if (timeLeft === 0) {
        return;
      }
    }
  };

  var displayTime = function () {

    document.getElementById('timer').innerHTML = timeLeft;

  };
  setInterval(runTimer, 1000);

  var totalScore = 0;
  var currentScore = 0;
  var totalWrong = 0;
  var selectCorrectAnswer = function () {
    currentScore = currentScore + 1;
    console.log("The total correct is currently " + currentScore);
  };

  var selectWrongAnswer = function () {
    totalWrong = totalWrong + 1;
    console.log("The total wrong is currently " + totalWrong);
  };


  $('.correct').on('click', selectCorrectAnswer);
  $('.wrong').on('click', selectWrongAnswer);

});
