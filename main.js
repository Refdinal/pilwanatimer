window.onload = function () {
  var minutes = 0;
  var seconds = 0;
  var tens = 0;

  var sound = new Audio("./Assets/Sound/mixkit-bell-ring-buzzer-2962.wav");
  var beep = new Audio("./Assets/Sound/beep-07a.wav");
  var mins = minutes;
  var secs = seconds;
  var mili = tens;

  var appendMinutes = document.getElementById("minutes");
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");

  var buttonDua = document.getElementById("button-dua");
  var buttonTiga = document.getElementById("button-tiga");
  var buttonLima = document.getElementById("button-lima");
  var buttonSepuluh = document.getElementById("button-sepuluh");
  appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
  appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  var Interval;

  buttonStart.addEventListener("click", function () {
    clearInterval(Interval);
    if (minutes != 0 || seconds != 0 || tens != 0) {
      Interval = setInterval(countDownTimer, 10);
    }
  });

  buttonStop.addEventListener("click", function () {
    clearInterval(Interval);
  });
  buttonDua.addEventListener("click", function () {
    clearInterval(Interval);
    minutes = mins;
    seconds = secs;
    tens = mili;
    appendMinutes.innerHTML = +2;
    minutes += 2;
    appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  });
  buttonTiga.addEventListener("click", function () {
    clearInterval(Interval);
    minutes = mins;
    seconds = secs;
    tens = mili;
    appendMinutes.innerHTML = +3;
    minutes += 3;
    appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  });
  buttonLima.addEventListener("click", function () {
    clearInterval(Interval);
    minutes = mins;
    seconds = secs;
    tens = mili;
    appendMinutes.innerHTML = +4;
    minutes += 4;
    appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  });
  buttonSepuluh.addEventListener("click", function () {
    clearInterval(Interval);
    minutes = mins;
    seconds = secs;
    tens = mili;
    appendMinutes.innerHTML = +10;
    minutes += 10;
    appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  });

  function countDownTimer() {
    if (appendSeconds.innerHTML < 15 && appendMinutes.innerHTML < 1) {
      beep.play();
    }
    if (minutes < 1 && (seconds == 0 || seconds == -1) && tens < 2) {
      sound.play();
      clearInterval(Interval);
      minutes = "00";
      seconds = "00";
      tens = "00";
      appendMinutes.innerHTML = minutes;
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      return 0;
    }
    if (tens > 0) {
      tens--;
    }
    if (tens < 10) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (seconds == 0 && tens == 1) {
      seconds = 60;
      if (minutes > 0) {
        minutes--;
        appendMinutes.innerHTML = minutes;
      }
    }
    if (tens <= 0) {
      tens = 100;
      if (seconds > 0) {
        seconds--;
        appendSeconds.innerHTML = seconds;
      }
    }
    if (seconds < 10) {
      if (seconds > -1) {
        appendSeconds.innerHTML = "0" + seconds;
      }
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds != -1 && seconds == 0 && minutes == 0) {
      tens == 100;
      seconds--;
    }
    if (seconds <= 0 && seconds != -1) {
      if (seconds != 0) {
        seconds = 59;
        if (minutes > 0) {
          minutes--;
          appendMinutes.innerHTML = minutes;
        }
      } else {
        appendSeconds.innerHTML = "00";
      }
    }
    if (minutes < 10) {
      appendMinutes.innerHTML = "0" + minutes;
    }
  }
};
