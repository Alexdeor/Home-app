const play = document.querySelector('.play');
const replay = document.querySelector('.replay');
let timer = document.querySelector('.timer');

let startStopBtn = "start";
let intervalStatus = null ;

let second = 0;
let minute = 0;
let hour = 0;


let leadingSecond ;
let leadingMinute  ;
let leadingHour  ;


function stopWatch(){
second++;

  if(second === 60 ){
  second = 0;
   minute++;
    if(minute === 60){
      minute = 0;
      hour++;
    }
    if(hour === 100){
      second = 0;
      minute = 0;
      hour = 0;
    }
  }
    if(second < 10){
    leadingSecond = "0" + second.toString();
    }
  else{
    leadingSecond = second;
  }
    if(minute < 10){
    leadingMinute = "0" + minute.toString();

    }
     else{
    leadingMinute = minute;
  }
   if(hour < 10){
     leadingHour = "0" + hour.toString();

    }
     else{
    leadingHour = hour;
  }
  timer.innerText = leadingHour  + ":" + leadingMinute + ":" + leadingSecond; 
 
};

play.addEventListener('click', function(){
  
  if(startStopBtn === "start"){
    play.innerHTML = "<i class='fa-solid fa-pause'></i>";
   intervalStatus = window.setInterval(stopWatch, 1);
    startStopBtn = "stopped";
  }
  else{
       window.clearInterval(intervalStatus);
        play.innerHTML = "<i class='fa-solid fa-play'>";

    startStopBtn = "start";

  }
  
} )

replay.addEventListener('click', function(){
  
       window.clearInterval(intervalStatus);
  second = 0;
  minute =0;
  hour =0;
timer.innerText = "00:00:00";
})

