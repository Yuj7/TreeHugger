let totalcounter = 1;
let clicks = 0;
let clickCounter = 1;
let total = 0;

const quotes = ["Love is like a tree, it grows of its own accord, it puts down deep roots into our whole being. -Victor Hugo",
"You know me, I think there ought to be a big old tree right there. And let's give him a friend. Everybody needs a friend. -Bob Ross",
"One touch of nature makes the whole world kin. -William Shakespeare"]

// On click increment 
function increment(){
    clicks+=totalcounter;
    counter.innerHTML = clicks;
    total += clickCounter;
    totalClicks.innerHTML = total;

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


let saxecounter = 1;

// First axe upgrade
function addsaxe(){
  if (clicks>=10){
    clicks = clicks-10;
  counter.innerHTML = clicks;
  saxecounter = saxecounter + 1;
  totalcounter = saxecounter;
  aLevel.innerHTML = "Silver " + saxecounter;
  }
  "upgrade-container-4"
}

let taxecounter = 0;
// Second axe upgrade

function addtaxe(){
  if (clicks>=50){
    clicks = clicks-50;
  counter.innerHTML = clicks;
  taxecounter = taxecounter + 1;
  totalcounter = taxecounter + 3 ;
  aLevel.innerHTML = "Tungsten " + (taxecounter);
  }
  "upgrade-container-4"
}

let daxecounter = 0;
// Third axe upgrade

function adddaxe(){
  if (clicks>=100){
    clicks = clicks-100;
  counter.innerHTML = clicks;
  daxecounter = daxecounter + 1;
  totalcounter = daxecounter + 5 ;
  aLevel.innerHTML = "Diamond " + (daxecounter);
  }
  "upgrade-container-4"
}

let schainsawcounter = 1;
// First chainsaw upgrade

function addschainsaw(){
  if (clicks>= 200){
    clicks =clicks-200;
    counter.innerHTML = clicks;
    schainsawcounter=schainsawcounter+1;
    totalcounter = schainsawcounter + 10 ;
    cLevel.innerHTML = "Shark " + (schainsawcounter);
  }
  "upgrade-container-4"
}

let cchainsawcounter = 1;
// Second chainsaw upgrade

function addcchainsaw(){
  if (clicks>=500){
    clicks =clicks-500;
    counter.innerHTML = clicks;
    cchainsawcounter=cchainsawcounter+1;
    totalcounter = cchainsawcounter + 15 ;
    cLevel.innerHTML = "Crystal " + (cchainsawcounter);
  }
  "upgrade-container-4"
}

let fchainsawcounter = 1;
// Third chainsaw upgrade


function addfchainsaw(){
  if (clicks>=1000){
    clicks =clicks-1000;
    counter.innerHTML = clicks;
    fchainsawcounter=fchainsawcounter+1;
    totalcounter = fchainsawcounter + 25 ;
    cLevel.innerHTML = "Flame " + (fchainsawcounter);
  }
  "upgrade-container-4"
}




// Timer
let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
let chainsawincrement = setInterval(plus1score,1000);
function plus1score(){
  clicks=clicks+chainsawcounter;
  counter.innerHTML=clicks;
  document.getElementById("chainsaw2").innerHTML = chainsawcounter+" clicks per second"
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

  let useCicks = 0;
  document.addEventListener('click', clickCo)


