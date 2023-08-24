// Document object model (DOM)
/* 
-Programming interface for HTML & XML documents.
-Provide a structured representation of the document
-Define methods to access the structure and manipulate it
-Connects web pages to scripts or programming languages
-DOM is not a programming language, it provides a model of a web page
-The page content is stored in the DOM and can be accessed and manipulated in Javascript
-"The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods."
*/
// INTRODUCTION TO DOM
// global variable

// console.log(document);
function showAlert(){
	window.alert("I 'm alerting you to the fact that the body has been loaded");
}
console.log(document.body);
document.body.innerText = "<h1> Something else </h1>";
document.body.innerHTML = "<h1> Something else </h1>";
const myTag = document.getElementsByTagName("P");


myTag[2].innerHTML = "I love donuts d:";


console.log(myTag[2].innerHTML);
 

 for(let i = 0 ; i <myTag.length ; i++)
 {
 	myTag[i].innerHTML = "Renamed !!!";
 }
 

 for(const p of myTag)

 {
 	p.innerHTML ="Renamed again :d";
 }

 
 GETTING ELEMENT BY ID

 const allSpans = document.getElementsByTagName("span");

 for(const prop of allSpans)

 {
 	prop.innerHTML =" Somebody  ";
 }

 What if we want to change one span

const ident = document.getElementById('identifier');

console.log(ident);

ident.innerHTML="<em> We all </em>";


SUB QUERRY

const myAppDiv = document.getElementById('app');
const specialWords = myAppDiv.getElementsByTagName('span');//SPECIFIC ONLY IN myAppDiv
const totalWorldsChanged = document.getElementById('total');

for(const proApp of specialWords)
{
	proApp.innerText = "TEST";
}
totalWorldsChanged.innerHTML = specialWords.length;
 
const membersUl = document.getElementById("members");
const allMembersNames = membersUl.getElementsByTagName('li');

// #################################################################################################################


allMembersNames[3].innerHTML = "Not Bob"; 


// #################################################################################################################


for(let prop of allMembersNames)
{
	if(prop.innerText === "Bob")
	{
		prop.innerText = "Not Bob";
	}
}
const myDiv = document.querySelector('div');

// #################################################################################################################

console.log(myDiv.style);

// #####################################################################################################################

myDiv.style.color = "green";
myDiv.style.fontSize = "100 px"

const dummyDivs = document.querySelectorAll(".dummy span");

console.log(dummyDivs);

for(const prop of dummyDivs){
    prop.style.color ="purple";
}


// ######################################################################################################################



const myFaveIceCreams = ["vanilla","rocky road","strawberry","chocolate"];
const creationDiv = document.getElementById("created");
const newElement = document.createElement("div");

// #####################################################################################################################


newElement.classList.add("purple", "foo");

newElement.innerText ="I was created by science!";
newElement.style.textAlign = "center"

// #####################################################################################################################
creationDiv.appendChild(newElement);

const newUl =document.createElement("ul");

for(let i = 0; i < myFaveIceCreams.length; i++)
{
const newLi =document.createElement("li");
newLi.innerText = myFaveIceCreams[i];
newUl.appendChild(newLi);
}
newElement.appendChild(newUl);

// ##########################################################################################################################

const unlikedIcecream = newUl.childNodes[3];

if(unlikedIcecream.innerText === "chocolate"){
    newUl.removeChild(unlikedIcecream);
}

// #########################################################################################################################


removeIceCream = (t) =>
{
    for(const prop of newUl.childNodes){
        if(prop.innerText === t){
            newUl.removeChild(prop);
        }
    }
}

removeIceCream("vanilla");