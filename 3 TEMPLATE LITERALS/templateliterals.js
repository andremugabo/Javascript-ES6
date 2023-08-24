// Template literals
/*

-String literals allowing embedded expressions
-Makes it easier to create multiline strings and allows string interpolation
-Enclosed in back-ticks(`String goes here`) instead of single quotes('') or double quotes ("")
-Can contain placeholders

 */ 
 var myFirstName = " Chris";
 var myLastName = "Jones";
 var myAge = "30";

 console.log("Hello"+" "+ myFirstName+" "+myLastName+" "+". I am "+myAge+" "+"years old.");
 
 var myNewList = 
 			"<ul>\n"+
 			"<li>I am item 1</li>\n"+
 			"<li>I am item 2</li>\n"+
 			"<li>I am item 3</li>\n"+
 			"<li>I am item 4</li>\n"+
 			"</ul>";

 			console.log(myNewList);

const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = myNewList;

//   By using back - ticks notation no need of concatination 

const myOtherList = 
`<ul>
	<li>I am es6 number 1!</li>
	<li>I am es6 number 2!</li>
	<li>I am es6 number 3!</li>
	<li>I am es6 number 4!</li>
</ul>`;
myDiv.innerHTML = myOtherList;

const first = "Sally";
const last = "Smith";
const age = 52;

console.log(`Hello ${first} ${last}. you are ${age} taday`);

const fullNameAndAge = `${first} ${last}, age: ${age}`

console.log(`Hello ${fullNameAndAge}`);

const dateNow = new Date();

console.log(`Today is : ${dateNow.toLocaleString()}`);

console.log(`Result is ${50 * 100}`);

// Template literals inside other Template Literals

const myArray = [1,2,3,4,5,6];

myArray.map((num) =>{
	console.log(num + 5);
});
const newArray = myArray.map((num)=>  num + 5);
console.log(newArray);
console.log(`${myArray.map((num)=> `Your result is :${num + 5}`)}`);

const pizzaToppings = ["cheese","mushrooms","sauce","pepperoni","pineapple"];

const myPizzaDiv = (
	`<article>
	<h1>Pizza Ingredients</h1>
	<ul>
		${pizzaToppings.map((ingredient)=>`<li>${ingredient}</li>`).join("\n        ")}
	</ul>
	</article>`);
console.log(myPizzaDiv);
const pizzaDiv = document.getElementById("pizzaDiv");
pizzaDiv.innerHTML = myPizzaDiv;
function templateParser(arrayOfString,expression1,expression2){
	console.log(`"${arrayOfString}","${expression1}","${expression2}"`);
}

const person = "Chris";
const personAge = 21;

const myTemplateLiteral = templateParser`I am person: ${person}, aged: ${personAge}`;





 