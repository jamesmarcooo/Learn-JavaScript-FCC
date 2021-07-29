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

// --
// Write Arrow Functions with Parameters
// >
// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
////var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// --
// Set Default Parameters for Your Functions
// >
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number, value = 1) => number + value;

//--
//Use the Rest Parameter with Function Parameters
// >
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (...args)=>{
    return args.reduce((a,b)=> a + b, 0);
  }
  
// --
// Use the Spread Operator to Evaluate Arrays In-Place
// >
// Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// --
// Use Destructuring Assignment to Extract Values from Objects
// >
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const {today, tomorrow} = HIGH_TEMPERATURES;

//--
//Use Destructuring Assignment to Assign Variables from Objects
//>
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

  
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;


// --
// Use Destructuring Assignment to Assign Variables from Nested Objects
// >
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;

//--
//Use Destructuring Assignment to Assign Variables from Arrays
//> 
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a]


//--
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
//>
//Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

//--
//Use Destructuring Assignment to Pass an Object as a Function's Parameters
//>
//Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

//const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({max, min}) => {
    return (max + min)/2.0;
}


//--
//Create Strings using Template Literals
//>
//Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings. Use an iterator method (any kind of loop) to get the desired output
/*A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. 
Secondly, notice that the string is multi-line, both in the code and the output. 
This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. 
Basically, you won't have to use concatenation with the + operator anymore.
To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.
*/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i = 0; i < arr.length; i++){
  failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);


// --
// Write Concise Object Literal Declarations Using Object Property Shorthand
// >
// Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  /*return {
    name: name,
    age: age,
    gender: gender
  };*/

  return{name,age,gender};
};


// --
// Write Concise Declarative Functions with ES6
// >
// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);


// --
// Use class Syntax to Define a Constructor Function
// >
// Use the class keyword and write a constructor to create the Vegetable class.
// Only change code below this line
class Vegetable{
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'



// --
// Use getters and setters to Control Access to an Object
// >
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
class Thermostat{
  constructor(temp){
    this._temp=temp;
  }
  get temperature(){
    return 5/9 * (this._temp - 32);
  }
  set temperature(updateTemp){
    this._temp = updateTemp * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);


// --
// Create a Module Script
// >
// Add a script to the HTML document of type module and give it the source file of index.js
  /*
  <html>
    <body>
      <!-- Only change code below this line -->
      <script type="module" src="index.js"></script>
      <!-- Only change code above this line -->
    </body>
  </html>
  */


// --
// Use export to Share a Code Block
// >
// There are two string-related functions in the editor. Export both of them using the method of your choice.
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export{uppercaseString, lowercaseString};


// --
// Reuse JavaScript Code Using import
// >
// Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.
import {uppercaseString, lowercaseString } from "./string_functions.js";

uppercaseString("hello");
lowercaseString("WORLD!");


// --
// Use * to Import Everything from a File
// >
// The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// --
// Create an Export Fallback with export default
// >
// The following function should be the fallback value for the module. Please add the necessary code to do so.
/*function subtract(x, y)*/
export default function(x, y) {
  return x - y;
}

