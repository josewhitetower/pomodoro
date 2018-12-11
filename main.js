var start = document.getElementById("start");
var input = document.querySelector("#input");
var break_time = document.getElementById("break").value;
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");
var isPaused = false;
var interval = null;
var minutes = parseInt(input.value);
var seconds = 0;
document.getElementById("demo").innerHTML = minutes + "m " + "00s ";

input.addEventListener("change", function(e) {
  minutes = parseInt(e.target.value);
  document.getElementById("demo").innerHTML = minutes + "m " + "00s ";
});

pause.addEventListener("click", function() {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(interval);
  } else {
    setTime(minutes, seconds);
  }
});

stop.addEventListener("click", function() {
  clearInterval(interval);
  minutes = parseInt(input.value);
  seconds = 0;
  //printTime(25);
  document.getElementById("demo").innerHTML = minutes + "m " + "00s ";
});

start.addEventListener("click", function() {
  setTime(minutes, 0);
});

function printTime(distance) {
  // Time calculations for days, hours, minutes and seconds

  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    minutes + "m " + (seconds < 10 ? "0" + seconds : seconds) + "s ";
}

function setTime(minutes, seconds) {
  var countDownDate = new Date();
  countDownDate.setMinutes(countDownDate.getMinutes() + minutes);
  countDownDate.setSeconds(countDownDate.getSeconds() + seconds);
  // Update the count down every 1 second
  interval = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Output the result in an element with id="demo"
    printTime(distance);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
