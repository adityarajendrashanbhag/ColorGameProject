var numSquares = 6;
var colors = [];
var pickedColor;
var pickedColor1;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var colorDisplay1 = document.getElementById("colorDisplay1");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
            var clickedColor1 = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} 
            else if(clickedColor1 === pickedColor1){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor1);
				h2.style.background = clickedColor1;
			} else {
				this.style.background = "black";
				messageDisplay.textContent = "Try Again"
			}
           
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
    colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
    pickedColor1 = pickColor1();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
    colorDisplay1.textContent = pickedColor1;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	h2.style.background = "orange"
    
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
        arr.push(randomColor1())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
//new linedsfdfdsfsfsdfsdfsdfsdfdsfdsffffffffffffffffssdfsd
//sdfsdfsdffsddfsdfdsfdsfdsfdsfdfsdfsdfdsf
function pickColor1(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function randomColor1(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
