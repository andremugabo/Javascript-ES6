console.log("Hello World");
// comment This is my first javascript code
//Variables is the fundamental concept in javascript
// Memory location for values
// before ES6 we used var key word
//let name;
//console.log(name);undefined since name has no value
let name = "Mosh";
console.log(name);

/**
 * Cannot be a reserved keyword
 * Should be meaningful
 * Cannot start with a number (1name)
 * Cannot contain a space or hyphen (-)
 * Are case-sensitive
 */

let firsName = "Mosh";
let lastName = "Hamedani";

// Constant
const interestRate = 0.3;
console.log(interestRate);
// Primitive Types also we have Reference Types
/**
 * Primitive Types are String, Number, Boolean, undefined, Null
 */
let fName = "Mosh"; // String Literal
let age = 20; // Number Literal
let isApproved = false; // Boolean literal
let firstName = undefined;
let selectedColor = null;
//Dynamic Typing we have also Static Typing(String name = 'John' this type cannot be changed in the future)
//Dynamic Typing (let name = 'Mosh') Here the type of variable can change at runtime
console.log(typeof name);
name = 24;
console.log(typeof name);

console.log(typeof firsName); // is undifined but undefined is also a value
console.log(typeof selectedColor); // is an object

// References Types (Object, Arrays, Function)
let person = {
  name: "Mosh",
  age: 30,
};
console.log(person);
//There two ways to work with properties of an Object

//1. Dot Notation
person.name = "John";
console.log(person);
console.log(person.name);

//2. Bracket Notation
person["name"] = "Mary";

console.log(person.name);
let selection = "name";
person[selection] = "Good";
console.log(person.name);
//Arrays
let selectedColors = []; // An empty array
let getColor = ["red", "blue"];
console.log(getColor);
console.log(getColor[0]);
getColor[2] = "green";
console.log(getColor);
getColor.push(1);
console.log(getColor.length);
