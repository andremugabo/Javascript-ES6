// LOOP
// quick and easy way to do something repeatedly

/*

Many types of loops but all do basicaly the same thing:
repeat something (i.e an action) a set number of times (could even be zero).

*/
// while loop

/*

while(condition) {
	statement;
}

*/

let numberOfLooop = 0;
while(numberOfLooop < 10){
	console.log("I am looping");
	// console.log(numberOfLooop);
	numberOfLooop ++;
}

let num1 = 0;
let num2 = 0;

while(num1 < 100){
	num1 += 1;
	// console.log(num1);
	num2 += num1;
	// loopDeloop();
	if(num1 === 50){
		break;
	}
}

// console.log(num2);

function loopDeloop() {
	console.log("I 'am looping");
	}


const names = ["Chris", "Bob", "Joe","Ashley","Amy","Billy","Jane"];
let index = 0;

while(true){
	if(names[index] === "Joe"){
		console.log(names[index]);
		break;
	}
	index += 1;
}

while(index < names.length){
	if(names[index] === "Amy"){
		console.log(names[index]);
		break;
	}
	index += 1;
}

nameLooper = (arr,username) => {

	while(index < arr.length){
	if(arr[index] === username){
		console.log(arr[index]);
		break;
	}
	index += 1;
}
} 

nameLooper(names,"Billy");


// do ... while statement

/*

do{
	statement
}while(condition)

*/

let shouldRunOnlyOnce = false;

do{
	console.log("looping!!");
	shouldRunOnlyOnce = false;
} while(shouldRunOnlyOnce);

shouldRunOnlyOnce = true;
let index1 = 0;

do{
	console.log("looping!!");
	index1+= 1;
	if(index1 === 50){
	shouldRunOnlyOnce = false;
	}
} while(shouldRunOnlyOnce);

// let condition;
// do{
// 	const userInput = prompt("Enter q to exit");
// 	if(userInput === 'q'){
// 		condition = false;
// 	}else{
// 		condition =true;
// 	}
// }while(condition);

let totalMoney = 100;

do{
	checkIfCanPurchase();
}while(totalMoney > 500);

function checkIfCanPurchase(){
	if(totalMoney > 500){
		console.log("Can perchase");
	}else{
		console.log("connot purchase ");
	}
}

// for loop
// Repeat until a specified conditions evaluates to false 

/*

for(initial expression ; condition ; increment expression){
	statement;
}

*/

// var index2 = 0;
// for(index2 ; index2 < 10 ;index2 ++){
// 	console.log(index2);
// }

// const iceCream = ["vanilla","chocolate","rocky road","strawberry"];

// for(var i = 0;i < iceCream.length; i++){
// 	console.log(iceCream[i]);
// }

// for(let i = 1; i<= 100 ; i++)
// {
 
//  if(i % 3 === 0 && i % 5 === 0)
//  {
//  	console.log("FizzBuzz");
//  }else if (i % 3 ===0)
//  {
//  	console.log("Fizz");
//  }else if (i % 5 === 0)
//  {
//  	console.log("Buzz");
//  }else
//  {
//  	console.log(i);
//  }

// }

for(let i = 1; i < 10; i++)
{
	for(let j =1 ; j <= i; j++)
	{
		console.log("* ");
	}
		console.log("\n ");


}

setTimeout(function(){

		console.log("one second elapse");

},5000);


	setTimeout(function(){
		for(var i =0; i < 10; i++){
// console.log(i);
}
	}, 3000);

function looper(value){
	setTimeout(function(){
		// console.log(value);
	},value * 1000);
}

for(var i = 0 ; i < 50 ; i++)
{
	looper(i);
}

for(let i = 0 ; i < 10; i++){
	setTimeout(() =>{
		// console.log(i);
	}, i * 10000);
}

// for..... in loop
/*
Loop through an object's properties in arbitrary order( get values in an object)
*/

const users = {1: "Sally", 2: "Billy", 3: "Ashley", 4: "Timmy" };

for(let prop in users){
	// console.log(prop);
	// console.log(users[prop]);
	// let newUser = users[prop];
	// newUser = "Redacted";
	// console.log(newUser);
	if(users[prop] === "Sally"){
		users[prop] = "Unknown";
	}

	// console.log(users[prop]);
}

const drink = ["coffee","sprite","tea","coke","pepsi"];
for(let d in drink){
	console.log(drink[d]);
	console.log(d);
}
/* 
For.... of loop
syntax 
 for(variable of object)
 statment;
 New loop in ES6 used to loop over iterable objects (arrays, strings, maps, sets, etc)
*/
 let ary = [1,2,3,4,5];
 let str = "tuition";

 for(let value of ary){
 	value += 1;
 	console.log(value);
 }
for(let key of ary){
	// console.log(ary[key]);
}
for(let stri of str){
	console.log(stri);
}

/* 
For each loop (for array)

*/
console.log("###########################################");
drink.forEach(function(d){
	console.log(d);
});
console.log("###########################################");


/* 
For.... of loop
syntax 
 for(variable of object)
 statment;
 New loop in ES6 used to loop over iterable objects (arrays, strings, maps, sets, etc)
*/

for(const d1 of drink){

	console.log(d1);
}
console.log("###########################################");
console.log("###########################################");
console.log("###########################################");
console.log("###########################################");
console.log("###########################################");

for(const d2 of drink){

	if(d2 === "sprite"){
		// console.log(d2);
		continue;
	}else{
		console.log(d2);
	}
}


const myString = "Hello!!";

for(const stri of myString){
	console.log(stri);
}
const orginalArray = [10, 15, 20, 25, 30];
for(let num of orginalArray){

	num += 10;
	console.log(num);
}


function numIncreaser(arr , numToIncBy){

	for(let num of arr){
		num +=numToIncBy;
		console.log(num);
	}
}

numIncreaser(orginalArray,50);