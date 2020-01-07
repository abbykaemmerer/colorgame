let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    // eslint-disable-next-line func-names
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = 'Try again';
        }
    });
}

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

    return "rgb(" + r + "," + g + "," + b + ")";
}