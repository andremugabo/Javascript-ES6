/* 

Homework Assignment #8: Events
 

Details:
 
 You can think of this homework as a warmup to project #1 (coming directly after this assignment). Don't worry too much about making this homework perfect, 
 save your energy (and sanity) for the larger project. For this assignment we'll just be looking to see that you covered the basic functionality.

Your assignment is to create a tic-tac-toe game out of HTML, CSS and Javascript. You should have a single HTML page, 
one accompanying JS file, and one accompanying CSS file.

1. When the page loads, only the game board should be displayed (draw the game board any way you see fit).

2. When a user clicks within the game board (in an empty space) their mark (either "X" or "O" should appear there).
 "X" goes first. So the first valid click on the game board should produce an "X". The second should produce an "O", and then they should trade off.

3. The "X" s should be red, and the "O"s should be black.

4. If someone wins (gets three in a row), you should make a dialog box appear on the screen that says either "X has won!" or "O has won!" 
And when the dialog box is closed, the game should be reset to its beginning state.

5. If all the areas of the board get filled but nobody wins, a dialog box appear on the screen that says either "Cats game!" 
And when the dialog box is closed, the game should be reset to its beginning state. (What does cat's game mean?)


*/
let addX = true;

const A1 = document.getElementById("A1");
const A1S = A1.querySelector("span");



const A2 = document.getElementById("A2");
const A2S = A2.querySelector("span");


const A3 = document.getElementById("A3");
const A3S = A3.querySelector("span");


const B1 = document.getElementById("B1");
const B1S = B1.querySelector("span");


const B2 = document.getElementById("B2");
const B2S = B2.querySelector("span");

const B3 = document.getElementById("B3");
const B3S = B3.querySelector("span");


const C1 = document.getElementById("C1");
const C1S = C1.querySelector("span");


const C2 = document.getElementById("C2");
const C2S = C2.querySelector("span");

const C3 = document.getElementById("C3");
const C3S = C3.querySelector("span");

const gameBoard = document.getElementById("rightGameB");
const allSpan = gameBoard.querySelectorAll("span");

for(let element of allSpan)
{
	element.addEventListener("click",playGame);
	// console.log(element)
}


const but = document.getElementById("but");
const button = but.querySelector("button");

button.addEventListener("click",resetGame);

function resetGame() {
    A1S.innerText = ".";
    A2S.innerText = ".";
    A3S.innerText = ".";

    B1S.innerText = ".";
    B2S.innerText = ".";
    B3S.innerText = ".";

    C1S.innerText = ".";
    C2S.innerText = ".";
    C3S.innerText = ".";

    A1S.style.color = "white";
    A2S.style.color = "white";
    A3S.style.color = "white";

    B1S.style.color = "white";
    B2S.style.color = "white";
    B3S.style.color = "white";

    C1S.style.color = "white";
    C2S.style.color = "white";
    C3S.style.color = "white";


    // alert("NEW GAME !!");

    addX = true;

}


 function playGame(event){
	const cellTarget = event.target;

	if(cellTarget.innerText !=="."){
            return;
       }

    if(addX){
    	cellTarget.innerText = "X";
    	cellTarget.style.color = "red";
    	addX = false;
    }else{
    	cellTarget.innerText = "O";
    	cellTarget.style.color = "black";
    	addX = true;
    }   
    checkTheWinner();
}


theWinner = (winner) =>
{
	alert(winner +" Has win !!");
	resetGame();
}

gameOver = () =>
{
 
alert("Cat's game !!");

resetGame();

}

 function checkTheWinner(){

	// Ckeck for A 

	if(A1S.innerText === A2S.innerText && A2S.innerText === A3S.innerText && A1S.innerText === A3S.innerText && A1S.innerText !== "." )
	{
		theWinner(A1S.innerText);
		return;
	}

	// Check fo B

	if(B1S.innerText === B2S.innerText && B2S.innerText === B3S.innerText && B1S.innerText === B3S.innerText && B1S.innerText !== "." )
	{
		theWinner(B1S.innerText);
		return;
	}

	// Check for C 


	if(C1S.innerText === C2S.innerText && C2S.innerText === C3S.innerText && C1S.innerText === C3S.innerText && C1S.innerText !== "." )
	{
		theWinner(C1S.innerText);
		return;
	}


	// Check for 1

	if(A1S.innerText === B1S.innerText && B1S.innerText === C1S.innerText && A1S.innerText === C1S.innerText && A1S.innerText !== "." )
	{
		theWinner(A1S.innerText);
		return;
	}

	// Check for 2

	if(A2S.innerText === B2S.innerText && B2S.innerText === C2S.innerText && A2S.innerText === C2S.innerText && A2S.innerText !== "." )
	{
		theWinner(A2S.innerText);
		return;
	}

	// Check for 3 

	if(A3S.innerText === B3S.innerText && B3S.innerText === C3S.innerText && A3S.innerText === C3S.innerText && A3S.innerText !== "." )
	{
		theWinner(A3S.innerText);
		return;
	}

	// Check for the Diagonal

	if(A1S.innerText === B2S.innerText && B2S.innerText === C3S.innerText && A1S.innerText === C3S.innerText && A1S.innerText !== "." )
	{
		theWinner(A1S.innerText);
		return;
	}


	if(A3S.innerText === B2S.innerText && B2S.innerText === C1S.innerText && A3S.innerText === C1S.innerText && A3S.innerText !== "." )
	{
		theWinner(A3S.innerText);
		return;
	}

	notEmpty();

}

notEmpty = () =>{
     

    if(A1S.innerText != "." &&
    A2S.innerText != "." &&
    A3S.innerText != "." &&

    B1S.innerText != "." &&
    B2S.innerText != "." &&
    B3S.innerText != "." &&

    C1S.innerText != "." &&
    C2S.innerText != "." &&
    C3S.innerText != ".")

    gameOver();

}




