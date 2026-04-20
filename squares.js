let squareArea = document.querySelector("#squarearea");

let squareCount = parseInt(Math.random()*21)+30; //30-50
//make some variable for a really big zIndex
for(let i = 0; i<squareCount; i++){
    //make a square
    addSquare();
}

function getRandomColor(){
    //Make a color string
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6;i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return that string
    return color;
}
//make a function to add 1 square
function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.width = parseInt(Math.random()*11) + 45 + "px";
    square.style.height = parseInt(Math.random()*11) + 45 + "px";
    square.style.left = parseInt(Math.random()*649) + "px";
    square.style.top = parseInt(Math.random()*248) + "px";
    
    square.style.backgroundColor = getRandomColor();
    //I can put a onclick and a function(this)
    //put it on the screen
    squareArea.append(square);
}

//make sure that I set that as the onclick for the button

//Make a function that changes all the colors of all the squares
//make sure the button calls it
function changeColors(){
    
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => {
        square.style.backgroundColor = getRandomColor();
    });
    
}