$(document).ready(function () {
  //document.getElementById('timer').innerHTML = setInterval(() => this.clock = Date.now(), 1000);

  var timeLeft = 59;

  const runTimer = function () {
    if (timeLeft > 0) {

    
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


  var triviaGame = {

    totalScore: 0,
    currentScore: 0,

  };

});
