// Exeption handling
// const myObj = { a: 1, b: 2 }; we need to throw our own exception
const myObj = [1, 2, 3, 4, 5, 6]; // map is a method that can be called over arrays
myObj.map((obj) => console.log(obj));

// Throw your own exception
/**
 * - Use throw statement to throw own exception
 * - you specify the exception containing the value to be thrown
 * e.g:throw exception
 * - Can throw any expression
 */
// throw "new error !";

function checkIfNum(n) {
  if (isNaN(n)) {
    throw "this is not a number error";
  } else {
    console.log(n);
  }
}
checkIfNum("hey");
checkIfNum(8);
