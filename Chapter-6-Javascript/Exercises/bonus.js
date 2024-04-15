var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var livesDisplay = document.querySelector("#livesCount");
var resetButton = document.querySelector("#reset");
var lives = 3;

initializeGame();

function initializeGame() {
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    updateSquares();
    updateLivesDisplay();
}

squares.forEach(function(square) {
    square.addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#333";
            lives--;
            updateLivesDisplay();
            if (lives === 0) {
                gameOver();
            }
        }
    });
});

resetButton.addEventListener("click", function() {
    lives = 3;
    updateLivesDisplay();
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    updateSquares();
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});

function updateSquares() {
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    squares.forEach(function(square) {
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function updateLivesDisplay() {
    livesDisplay.textContent = "";
    for (var i = 0; i < lives; i++) {
        livesDisplay.textContent += "❤️";
    }
}

function gameOver() {
    messageDisplay.textContent = "Game Over!";
    resetButton.textContent = "Play Again?";
    squares.forEach(function(square) {
        square.style.backgroundColor = pickedColor;
    });
}
