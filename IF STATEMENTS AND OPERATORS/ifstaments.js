//if statemenrs
// Tells th code: if this thing is true ,run code
// if(expression){statemet(s) to be executed}
// evaluates to truthy or falsey
const shouldSayHi =true;

if(shouldSayHi === true){
    console.log("Hi there");
}

// Comparison Operators
const numberFive = 5;
const stringFive = "5";
const stringConversion = parseInt(stringFive);
const myArray=[1,2,3,4];
const myOtherArray=[1,2,3,4];
console.log(numberFive + stringFive);
console.log(numberFive == stringFive);
console.log(numberFive === stringFive);
console.log(numberFive + stringConversion);
console.log(numberFive == stringConversion);
console.log(myArray === myOtherArray);
