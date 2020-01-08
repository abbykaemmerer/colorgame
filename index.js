/* eslint-disable no-loop-func */
/* eslint-disable func-names */
let numOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numOfSquares = 3;
            }
            else{
                numOfSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;     
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = 'Try again';
            }
        });
    }
}


function reset(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors?"
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgb(85, 99, 129);";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    
    return colors[random];
}

function generateRandomColors(num){
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    let r = Math.floor(Math.random()* 256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random()* 256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random()* 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}