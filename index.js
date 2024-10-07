//score-display-home score
//score-display-guest score

let homeScore = document.getElementById("score-display-home");
let guestScore = document.getElementById("score-display-guest");

let countHome = 0;
let countGuest = 0;

//Incrementing for Home
function add1Home() {
  homeScore.innerText = 0;
  countHome += 1;
  homeScore.innerText = countHome;
}

function add2Home() {
  homeScore.innerText = 0;
  countHome += 2;
  homeScore.innerText = countHome;
}

function add3Home() {
  homeScore.innerText = 0;
  countHome += 3;
  homeScore.innerText = countHome;
}

//Incrementing for Guest
function add1Guest() {
  guestScore.innerText = 0;
  countGuest += 1;
  guestScore.innerText = countGuest;
}

function add2Guest() {
  guestScore.innerText = 0;
  countGuest += 2;
  guestScore.innerText = countGuest;
}

function add3Guest() {
  guestScore.innerText = 0;
  countGuest += 3;
  guestScore.innerText = countGuest;
}

//Clearing scores
function clearHomeScore() {
  countHome = 0;
  homeScore.innerText = countHome;
}

function clearGuestScore() {
  countGuest = 0;
  guestScore.innerText = countGuest;
}

//Setting countdown timer

const minutesOn = 5 * 60 * 1000; // 90 minutes

// Calculate the end time (current time + 90 minutes)
let addTimeOn;
let countDownInterval;

function startTimer() {
  const now = new Date().getTime();
  addTimeOn = now + minutesOn;

  //Countdown function - count down every second
  countDownInterval = setInterval(function () {
    //Get todays date
    const now = new Date().getTime();

    //Get the distance of set date and now
    //   const distance = countDownDate - now;
    const distance = addTimeOn - now;

    //Time calculations for days, hours, minutes, and seconds
    //   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   const hours = Math.floor(
    //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //   );
    const minutes = Math.floor((distance % (1000 * 60 * 5)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Displaying the date and time
    const dateDisplay = document.getElementById("date-display");
    dateDisplay.innerHTML = `${minutes}m ${seconds}s`;

    //Score difference
    const scoreDifference = countHome - countGuest;
    const goalStr = scoreDifference === 1 ? "goal" : "goals";
    const guestScoreDifference = countGuest - countHome;
    const goalGuestStr = guestScoreDifference === 1 ? "goal" : "goals";

    //If the countdown is finished
    let winnerOutput = document.getElementById("winner-output");
    if (distance < 0) {
      clearInterval(countDownInterval);
      dateDisplay.innerHTML = "FINAL TIME";

      if (countHome > countGuest) {
        winnerOutput.innerHTML = `The Home team won the Guest by ${scoreDifference} ${goalStr}`;
      } else if (countHome === countGuest) {
        winnerOutput.innerHTML = `The Home and Guest team drew: ${countHome} - ${countGuest}`;
      } else if (countGuest > countHome) {
        winnerOutput.innerHTML = `The Guest team won the Home team by ${guestScoreDifference} ${goalGuestStr}`;
      }
    }
  }, 1000);
}

//Reseting the timer
function resetTimer() {
  let winnerOutput = document.getElementById("winner-output");
  //   location.reload();

  clearInterval(countDownInterval);
  winnerOutput.innerHTML = "";
  startTimer();
}
