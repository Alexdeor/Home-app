
let time = document.querySelector('.watch');
let pmAm = document.querySelector('.pm-am');
let background = document.querySelector('.app');
const currentDate = document.querySelector('.date');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function watch(){
  let date = new Date();
  let minute = date.getMinutes();
  let hour = date.getHours();
  currentDate.innerText = weekDays[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + date.getDate();
  if(hour> 18 || hour <6){
  background.style.backgroundImage = "url('./images/nature-3194001_1920.jpg')";
  document.body.style.color = 'white';
 }
//AM PM switch
  if(hour >= 12){
    pmAm.innerText = 'PM'
  }
  else{
    pmAm.innerText = 'AM'
  }
// changing from military time to regular 
  if(hour > 12){
    hour = hour - 12;
  }
  if(hour === 0){
    hour = 12; 
  }

  if((hour > 12 || hour < 10) && minute < 10){
    time.innerText =  '0' + hour +':' + '0' + minute;
  
  }
  else if((hour > 12 || hour < 10) && minute >= 10){
    time.innerText =  '0' + hour + ':' + minute;
  
  }
  else if((hour <= 12 || hour >= 10) && minute < 10){
    time.innerText =  hour + ':' + '0' + minute;
  
  }
  else if((hour <= 12 || hour >= 10) && minute >= 10){
    time.innerText =  hour +':' + minute;
  
  }

};

setInterval(watch, 10);
