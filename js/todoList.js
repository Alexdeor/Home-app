
//todo list
let todoInput = document.querySelector(".user-input");
let todoList = document.querySelector(".list-container");
let todoButton = document.querySelector ("#submit-btn");
let checkBtn = document.querySelector("button")
let countNum = document.querySelector('.count-number');
const options = document.querySelector('.todo-option');
const listContainer = document.querySelector('.list-container');
const userList = document.querySelector('.user-list');

todoInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    todoButton.click();
  }
});
//todo list functions
todoButton.addEventListener("click", addTodo);
checkBtn.addEventListener('click', addCheck);
todoList.addEventListener('click', markRemoveBtn);


function addTodo(e){
    e.preventDefault();

    // create elements
    let todoDiv = document.createElement('div');
    let todoP = document.createElement('p');
    let markBtn = document.createElement('i');
    let removeBtn = document.createElement('i');
  // add classes
    todoDiv.classList.add('user-list');
    markBtn.classList.add('fa-solid');
    markBtn.classList.add('fa-circle-check');
    markBtn.classList.add('check');
    todoP.classList.add('reminder');
    todoP.innerText = todoInput.value;
    removeBtn.classList.add('fa-solid');
    removeBtn.classList.add('fa-calendar-xmark');
    removeBtn.classList.add('cross');
    //connect all values
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(markBtn);
    todoDiv.appendChild(todoP);
    todoDiv.appendChild(removeBtn);
  todoInput.value = '';
    
  }
  
  function markRemoveBtn(e){

    let item = e.target;
    if(item.classList[2] === 'cross'){
      let remove = item.parentElement;
      remove.remove();
    }
    
    if (item.classList[2] === 'check'){
       const markedItem = item.nextElementSibling;
       const mark= item;
      markedItem.classList.toggle("mark");
      mark.classList.toggle("check-mark");

    }
    
  }
  function addCheck(e){
    if (checkBtn){
     }
  }
 //count number function

  const integer = document.getElementsByTagName("div").length;




//day and night switch
let sunMoon = document.querySelector('.fa-moon');
let bG = document.querySelector('.active-tool')
//
// <i class="fa-solid fa-moon"></i>
// sun switch function
sunMoon.addEventListener('click', (e) => {
  console.log(e.target.classList);
  if(e.target.classList[1] === 'fa-moon'){
    sunMoon.classList.remove('fa-moon');
    sunMoon.classList.toggle('fa-sun');

    bG.style.backgroundColor = 'black'
  }
  else if(e.target.classList[1] === 'fa-sun'){
    sunMoon.classList.remove('fa-sun');
    sunMoon.classList.toggle('fa-moon');
    bG.style.backgroundColor = 'rgba(255, 255, 255, 0.189)';
 }
})




options.addEventListener('click', filterTodo);


function filterTodo(e) {
  const todos = listContainer.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("mark")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "active":
        if (!todo.classList.contains("mark")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
