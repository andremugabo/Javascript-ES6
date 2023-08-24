/* ==========================================
Homework Assignment #2: Variables and Constants
==============================================*/
/*==================================================================================================================
var:
---
"var" 
var allows us to declare a variable in javascript ES5 and ES6, it is optional to initialize the declared variable,
the scope for which var has an effect is its current execution context, which can be a global scope, 
i.e. outside of any function or local scope, i.e. at the inside any block or function
if var is declared in local scope, it is only accessible in this local context
with var it is not a good practice to re-declare another variable using the same variable name.   

======================================================================================================================*/
/*=====================================================================================================================
let:
----
let allows you to declare a variable in ES6 javascript, let is limited in the scope of the block, i.e. it is not accessible outside
of the block, in short let is more strictly than var. 
========================================================================================================================*/
/*======================================================================================================================
const:
-----
const allows us to declare a variable in ES6 javascript which always remains constant, it can be global or local. It is always necessary to define an initializer,
i.e. its value is specified at the same time the variable is declared, otherwise the variable is undefined, const is similar to let since it is a scope block.

=========================================================================================================================*/
// Example var:
console.log(
  "==========================================var start here==================================================="
);

var myFirstName = "Andre"; //global scope
var ifName = true; // global scope
var job; //it is not necessary to initialize a variable when declaring the variable using var

function myName() {
  var myLastName = "Mugabo"; // is not accessible outside of this function but elsewhere in this function, it is possible to access my lastName
  console.log("My names are " + " " + myLastName + " " + myFirstName);
  if (ifName === true) {
    var age = 38; //accessible locally in the function myName whatever the scope of the block
    console.log("and i am " + age + " " + "years old");
  }
  console.log(age);
}
job = "jobless";
// console.log(myLastName); out of scope
// console.log(age); out of scope
console.log(myFirstName);
myName();
console.log(job);

/*================================================================================================================================ */
// Example let:
console.log(
  "==========================================let start here==================================================="
);
let my_FirstName = "Andre"; //global scope
let if_Name = true; // global scope
let job_l; //it is not necessary to initialize a variable when declaring the variable using let

function my_Name() {
  let my_LastName = "Mugabo"; // is not accessible outside of this function but elsewhere in this function, it is possible to access my lastName
  console.log("My names are " + " " + my_LastName + " " + my_FirstName);
  if (if_Name === true) {
    let age_my = 38; //accessible only in this block
    console.log("and i am " + age_my + " " + "years old");
    console.log("My names are " + " " + my_LastName + " " + my_FirstName);
  }
  // console.log(age_my); out of scope (limited on scope block)
}
job_l = "jobless";
// console.log(my_LastName); out of scope
// console.log(age_my); out of scope
console.log(my_FirstName);
my_Name();
console.log(job_l);

/*================================================================================================================================ */
// Example const:
console.log(
  "==========================================const start here==================================================="
);
const facult = "Applied Science"; //global scope
const ifoption = true; // global scope
const Department = "Applied Mathematics"; //it is  necessary to initialize a variable when declaring the variable

function u_Rcsc() {
  const Location = "Kigali"; // is not accessible outside of this function but elsewhere in this function, it is possible to access my lastName
  console.log(
    "Facult of " + " " + facult + " " + " departement of" + " " + Department
  );
  if (ifoption === true) {
    const Period = 4; //accessible only in this block
    console.log("Period " + Period + " " + "years");
    console.log(
      "Facult of " + " " + facult + " " + " departement of" + " " + Department
    );
  }

  // console.log(Period); out of scope (limited on scope block)
}
console.log(Location); // out of scope
// console.log(Period); //out of scope
console.log(facult);
u_Rcsc();
