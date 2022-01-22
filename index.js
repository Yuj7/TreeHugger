let axecounter = 1;
let clicks = 0;

// On click increment 
function increment(){
    clicks+=axecounter;
    counter.innerHTML = clicks;
}

// First axe upgrade
function addaxe(){
  if (clicks>=10){
    clicks = clicks-10;
  counter.innerHTML = clicks;
  axecounter = axecounter+1;
  }
  "upgrade-container-4"
}

// Timer
let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   let hour = Math.floor(totalSeconds /3600);
   let minute = Math.floor((totalSeconds - hour*3600)/60);
   let seconds = totalSeconds - (hour*3600 + minute*60);
   if(hour < 10)
     hour = "0"+hour;
   if(minute < 10)
     minute = "0"+minute;
   if(seconds < 10)
     seconds = "0"+seconds;
   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}
