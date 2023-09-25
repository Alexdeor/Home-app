let deactivateCode = false;

// Event listener for .tool-four to activate the code
document.querySelector('.tool-four').addEventListener('click', function () {
    deactivateCode = true;
});

// Event listener for .overlay to deactivate the code
document.querySelector('.overlay').addEventListener('click', function() {
    deactivateCode = false;
});

// Event listener for keydown, only active when deactivateCode is true
window.addEventListener("keydown", function(e) {
    if (deactivateCode && ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gameOverDisplay=  document.querySelector('.gameOverDisplay');
const gameStartDisplay=  document.querySelector('.startGameDisplay');
const gridSize = 25;
const rows = canvas.height / gridSize;
const cols = canvas.width / gridSize;

let snake = [{ x: 5, y: 5 }];
let food = { x: 10, y: 10 };
let dx = 1;
let dy = 0;
let score = 0;
let gameInterval;
let gameRunning = false;

function startGame() {
    if (!gameRunning) {
        function updateGameArea() {
            drawGrid();
            drawSnake();
            drawFood();
            moveSnake();
            checkCollision();
        }
        gameRunning = true;
        gameOverDisplay.style.display = 'none';
        gameStartDisplay.style.display = 'none';
        generateFood();
        snake = [{ x: 5, y: 5 }];
        dx = 1;
        dy = 0;
        score = 0;
        gameInterval = setInterval(updateGameArea, 100);
    }
}
document.addEventListener('keydown', function (e){
    if(e.key){
        startGame();
    }
});
// Draw the background grid
drawGrid()
function drawGrid() {

// Loop through rows and columns to draw the chessboard
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            // Calculate the x and y coordinates for the current square
            var x = col * gridSize;
            var y = row * gridSize;

            // Alternate the fill color for each square
            if ((row + col) % 2 === 0) {
                ctx.fillStyle = "lime";
            } else {
                ctx.fillStyle = "green";
            }

            // Draw the square
            ctx.fillRect(x, y, gridSize, gridSize);
        }
    }
}
function drawSnake() {
         
   snake.forEach(segment => {
   //Draw snake body
     ctx.fillStyle = "grey";
       ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
     


     
     
   });
}

function drawFood() {
    ctx.fillStyle = "red";  
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  //draw the snake head
      ctx.fillStyle = "black";
       ctx.fillRect(snake[0].x * gridSize, snake[0].y * gridSize, gridSize, gridSize);

  snake.unshift(head);            
    if (head.x === food.x && head.y === food.y) {
        score++;
        generateFood();
    } else {
        snake.pop();
    }
}

function generateFood() {
    food.x = Math.floor(Math.random() * cols);
    food.y = Math.floor(Math.random() * rows);
}





document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (dy !== 1) {
                dx = 0;
                dy = -1;
                gameStartDisplay.style.display = 'none';
            }
            
            break;
        case "ArrowDown":
            if (dy !== -1) {
                dx = 0;
                dy = 1;
                gameStartDisplay.style.display = 'none';
            }
            break;
        case "ArrowLeft":
            if (dx !== 1) {
                dx = -1;
                dy = 0;
                gameStartDisplay.style.display = 'none';
            }
            break;
        case "ArrowRight":
            if (dx !== -1) {
                dx = 1;
                dy = 0;
                gameStartDisplay.style.display = 'none';
            }
            break;
    }


});

generateFood();
function checkCollision() {
    let head = snake[0];
    if (
        head.x < 0 ||
        head.x >= cols ||
        head.y < 0 ||
        head.y >= rows ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    )  {

        clearInterval(gameInterval);

        gameOverDisplay.style.display = 'grid';
        gameOverDisplay.firstElementChild.innerHTML = `TOTAL SCORE: ${score} <br> Press SPACE BAR to continue`;
        document.addEventListener('keydown', function (e){
            if(gameOverDisplay.style.display === 'grid' && e.key === ' '){
                gameRunning = false;
                startGame();
            }
        });
        

    }
    
}


