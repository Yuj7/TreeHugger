let axecounter = 1;
let clicks = 0;
let chainsawcounter=0;

const quotes = ["Love is like a tree, it grows of its own accord, it puts down deep roots into our whole being. -Victor Hugo",
"You know me, I think there ought to be a big old tree right there. And let's give him a friend. Everybody needs a friend. -Bob Ross",
"One touch of nature makes the whole world kin. -William Shakespeare"]

// On click increment 
function increment(){
    clicks+=axecounter;
    counter.innerHTML = clicks;

    //var x = event.clientX;
    //var y = event.clientY;
    //var coords = "X coords: " + x + ", Y coords: " + y;
    //document.getElementById("demo").innerHTML = coords;

    //var img = document.createElement("img");
    //img.src = "Assets/TreeArt.png";
    //var block = document.getElementById("x");
    //block.appendChild(img);

    if (clicks >= 50){
      quote.innerHTML = quotes[0];
    }
    if (clicks >= 75){
      quote.innerHTML = quotes[1];
    }
    if (clicks >= 100){
      quote.innerHTML = quotes[2];
    }

}




// First axe upgrade
function addaxe(){
  if (clicks>=10){
    clicks = clicks-10;
  counter.innerHTML = clicks;
  axecounter = axecounter+1;
  aLevel.innerHTML = axecounter;
  }
  "upgrade-container-4"
}
function addchainsaw(){
  if (clicks>=20){
    clicks =clicks-20;
    counter.innerHTML = clicks;
    chainsawcounter=chainsawcounter+1;
    cLevel.innerHTML = chainsawcounter;
  }
}




// Timer
let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
let chainsawincrement = setInterval(plus1score,1000);
function plus1score(){
  clicks=clicks+chainsawcounter;
  counter.innerHTML=clicks;
  document.getElementById("chainsaw2").innerHTML = chainsawcounter+"clicks per second"
}

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


