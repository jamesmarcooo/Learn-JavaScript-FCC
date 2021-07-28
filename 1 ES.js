// Explore Differences Between the var and let Keywords
// A new keyword called let was introduced in ES6 to throw an error when a variable was overriden
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// --
// Compare Scopes of the var and let Keywords
// When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
// >
// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

//   --
//   Declare a Read-Only Variable with the const Keyword
//   >
//   Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.
function printManyTimes(str) {

    // Only change code below this line
  

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");

// --
// Mutate an Array Declared with const
// >
// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// --
// Prevent Object Mutation
// >
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

//   --
//   Use Arrow Functions to Write Concise Anonymous Functions
//   >
//   Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
//// var magic = function() {
//   return new Date();
// };

const magic = () => new Date();