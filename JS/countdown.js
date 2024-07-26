document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start");
  const resetButton = document.getElementById("reset");
  const hourInput = document.getElementById("hour");
  const minuteInput = document.getElementById("minute");
  const secondInput = document.getElementById("second");

  let timer;

  function startTimer() {
    let hours = parseInt(hourInput.value) || 0;
    let minutes = parseInt(minuteInput.value) || 0;
    let seconds = parseInt(secondInput.value) || 0;
    if ((hourInput.value || minuteInput.value || secondInput.value) == '') {
      head.innerText = "Please input value";
    } else if ((hourInput.value, minuteInput.value, secondInput.value) < 0) {
      head.innerText = "Please input positive value";
    } else {
      head.innerText = "Timer Started";
    }
    
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    clearInterval(timer);
    
    timer = setInterval(() => {
        if (totalSeconds == 0 && (hourInput.value, minuteInput.value, secondInput.value) != ''  ) {
            clearInterval(timer);
            head.innerText = "Time's Up, Press RESET";
            return;
        }

      const remainingHours = Math.floor(totalSeconds / 3600);
      const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
      const remainingSeconds = totalSeconds % 60;

      // Display remaining time
      hourInput.value =
        remainingHours < 10 ? "0" + remainingHours : remainingHours;
      minuteInput.value =
        remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
      secondInput.value =
        remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

      // Decrement the total seconds
      totalSeconds--;
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    head.innerText = "Timer Reset,Input New Time";
    hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";
  }

  startButton.addEventListener("click", startTimer);
  resetButton.addEventListener("click", resetTimer);
});
