// DESTRUCTURING
/*
- "The destructuring assignment syntax is a Js expression that makes it possible
to extract data from arrays or objects into distinct variables- Mozilla Developer Network"
- Destructuring syntax can be used on left-hand side of assignments
*/ 

// const myArray = [1,2,3,4,5,6];
// const fisrtNum = myArray[0];
// console.log(fisrtNum);

// const myArray = new Array();
// myArray[0] = 1;
// myArray[1] = 2;

// console.log(myArray);
 // now ES6 way of extracting array elements or objects into distinct variables
const myArray = [1,2,3,4,5,6];
const [x,y,z,a,b] = myArray; // extracte using detructuring

// console.log(x);  

const mySecondArray = ["Jane Doe","John Smith","Billy Bob"];
let name1 ,name2 ,name3,name4;
[name1,name2,name3,name4="I'm a deafult"] = mySecondArray;

console.log(name1 ,name2, name3,name4);
let aa = 100;
let bb = 250;
let cc = 500;
// let temp = cc;

console.log(aa,bb,cc);

// cc = bb
// bb = temp;

[bb , cc] = [cc , bb]; // swaping using destructuring

console.log(aa,bb,cc);


// Use with functions

// function returnArray(){
// 	return ["donuts","chocolate","candy","gummy bears"];
// }

// console.log(returnArray());

// const [m,n,o,p] = returnArray();

// console.log(n);


function foodFilter(arr,term){
	return arr.filter((t) => term);// filter takes a function
}


const [result] = foodFilter(["chicken","fish","tofu"],"chicken");

console.log(result);// filter always return an array

// Can ignore some values 

const anotherArr = [10,20,30,50,100,1000,40];
const [numA, numB, , numC, ,numD] = anotherArr;

console.log(`First: ${numA},second: ${numB},third: ${numC},fourth: ${numD}`);

//  Can use rest pattern 

// function sayHi(firstArg, ...restOfArg){ // Put the rest of element in an array
// 	console.log(`Hi ,${firstArg}`);
// 	console.log(restOfArg);
// }
// sayHi("Chris",30,40,"123 Fake St");

const yetAnotherArr = ["dogs","cats","birds","snakes","hedgehogs"];
const [dogString,catString, ...otherAnimals] = yetAnotherArr;

console.log(dogString);
console.log(catString);
console.log(otherAnimals);

let filter = otherAnimals.filter((t) => {return t === "snakes" });

console.log(filter)