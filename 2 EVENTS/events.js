// Events
/* 
-Any event that tkes place in the DOM
-Can be user-generated or by API
-Many types of events
-Event contains properties and methods
-addEventListeneer function takes in the event to listen for, and a second argument to be called whenever the described event fires
  -addEventListener("click", function(){logic inside function});
*/

// INTRODUCTION TO EVENTS

document.addEventListener("click",function(){
	alert("clicked");
});

const clicky = document.getElementById("clicky");

clicky.addEventListener("click",function(){
	alert("clicked");
});
document.addEventListener("DOMContentLoaded",switchBackground);
const clicky = document.getElementById("clicky");
const clickableButton = clicky.querySelector("button");

clicky.addEventListener("click",function(event){
	alert(event.type);
});
function handleClick(){
	alert("Click :D");  // old school
}

 clickableButton.addEventListener("focus",function(event){
	console.log(event);
});

clickableButton.addEventListener("focusout",function(event){
	console.log(event);
});

 clickableButton.addEventListener("click",logEvent);

 clickableButton.addEventListener("focus",logEvent);

 clickableButton.addEventListener("focusout",logEvent);

  function logEvent(e) {
  	console.log(e.type);
  }

   function logEvent(e) {

  	if(e.type === "click")
  	{
  		clickableButton.style.background = "blue";
  	}else if(e.type === "focus") 
  	{
  		clickableButton.style.background ="yellow";
  	}else{
  		clickableButton.style.display ="none";
  	}

  }


  function logEvent(e){
  	clickableButton.innerText = e.type ;
  	clickableButton.removeEventListener("click",logEvent);
  	console.log(e.type);
  }

  const background = document.getElementById("background");
  const listItemsUl = background.querySelector("UL");
  // const allLis = background.querySelectorAll("li");

   // background.addEventListener("mousedown", switchBackground);
   document.addEventListener("click", switchBackground);
   listItemsUl.addEventListener("click",addGreenBackground);


   function switchBackground(e){
   	console.log(e);
   	if(e.which === 1){
   		background.classList.add("background-color");
   	}else if(e.type === "focusout"){
   		background.classList.remove("background-color");
   	}
   }


function switchBackground(e){
	const hasBeenClicked = background.contains(e.target);
   	console.log(hasBeenClicked);

   			if(hasBeenClicked){
   				background.classList.add("background-color");
   			}else{
   				background.classList.remove("background-color"); 
   			}   	
   }

   function addGreenBackground(e){

   		e.stopPropagation();
  	const targetLi = e.target;

  		if(targetLi.nodeName === "UL")
  		{
  			return;
  		}

   		for(const prop of allLis){

   			prop.classList.remove("green");
   		}

const green = document.querySelector(".green");
if(green){
	green.classList.remove("green");
}

   	console.log(e.target);
 

   	targetLi.classList.add("green");
   }


const background2 = document.getElementById("background2");
const allLis = background2.querySelectorAll("li");


for(const prop of allLis){

	prop.addEventListener("click", function (event) {
		console.log("Clicked !" + event.target);
		console.log(this);
	})
}

// PREVENTING DEFAULT

const div2 = document.getElementById("div2");
const myLink = div2.querySelector("a");

myLink.addEventListener("click",function(event){
  event.preventDefault();
  alert("Not today");
});


const myForm = document.getElementById("myForm");
myForm.addEventListener("submit",addToList);

function addToList(e){;
    e.preventDefault();
    const myInput = document.getElementById("myInput").value;
    let newLI = document.createElement("li");
    newLI.innerText = myInput;
    listItemsUl.appendChild(newLI);
    myForm.reset();
    

    console.log(newLI);
}

// KEY EVENTS

document.addEventListener("keydown",function(e){
  console.log(e.keyCode);
})

const div4 = document.getElementById("div4");
const para = div4.querySelector("p");
const textarea = div4.querySelector("textarea");
const paraText = " User is typing";
let timer;
let count = 0;

textarea.addEventListener("keydown",addText);
textarea.addEventListener("keyup",removeText);

function addText(e){
  para.innerText = paraText;
}

function removeText(e){
  count += 1;
  console.log(count);
  clearTimeout(timer);
  timer = setTimeout(()=>{
     para.innerText = " ";
   },1000);
}

//LOAD EVENTS

