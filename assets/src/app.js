$(document).ready(function () {
  //document.getElementById('timer').innerHTML = setInterval(() => this.clock = Date.now(), 1000);



  const runTimer = function () {
    displayTime();
  };

  var displayTime = function () {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById('timer').innerHTML = time;

  };
  setInterval(runTimer, 1000);


  var triviaGame = {

    totalScore: 0,
    currentScore: 0,

  };

});
