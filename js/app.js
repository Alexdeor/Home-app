const overlay =  document.querySelector('.overlay');
const activeTool = document.querySelector('.active-tool');
const tools = document.querySelector('.box-container');
const boxOne = document.querySelector('.one');
const boxTwo = document.querySelector('.two');
const boxThree = document.querySelector('.three');
// Apps
const snakeGame = document.querySelector('.snake-container');
const calculatorApp = document.getElementById('calculator');
const todo= document.querySelector('.todo-container');
const stopWatchApp = document.querySelector('.stopwatch-container');

//  Tools activated
overlay.addEventListener('click', deactivate);
tools.addEventListener('click', selector);
boxOne.addEventListener('click', calculator);
//prevents from scrolling down while playing snake

function selector(e){
  let target = e.target;
if(target.id.includes('tool')){
    activeTool.style.display = 'grid';
  overlay.style.zIndex= "5";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.441)";

}
if(target.classList.contains('tool-one')){
  stopWatchApp.style.display = "none";
  todo.style.display = "none";
  calculatorApp.style.display = "block";
  snakeGame.style.display = 'none';

  }

else if(target.classList.contains('tool-two')){
    stopWatchApp.style.display = 'grid';
    calculatorApp.style.display = 'none';
    todo.style.display = 'none';
    snakeGame.style.display = 'none';

}
else if(target.classList.contains('tool-three')){
  todo.style.display = 'grid';
  stopWatchApp.style.display = 'none';
  calculatorApp.style.display = 'none';
  snakeGame.style.display = 'none';

}
else if(target.classList.contains('tool-four')){
  todo.style.display = 'none';
  stopWatchApp.style.display = 'none';
  calculatorApp.style.display = 'none';
  snakeGame.style.display = 'grid';

}
  else {
//    stopWatchApp.style.display = 'none';
    calculatorApp.style.display = "none";

  }
}

function deactivate(){
  overlay.style.zIndex= "-1";
    overlay.style.backgroundColor = "white";
    activeTool.style.display = 'none';
}

// Title movement 
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('showText')
    } else{
      entry.target.classList.remove('showText')
    }
  })
})


const hiddenItems = document.querySelectorAll('.hiddenText');
hiddenItems.forEach((el) => observer.observe(el));

// toggle for the active-tto