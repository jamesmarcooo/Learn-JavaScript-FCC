// --
// Use an Array to Store a Collection of Data
// >
// We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
let yourArray = ["dog",1,true,"cat",1,false]; // Change this line


// --
// Access an Array's Contents Using Bracket Notation
// >
// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "boy";
// Only change code above this line
console.log(myArray);


// --
// Add Items to an Array with push() and unshift()
// >
// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  

// --
// Remove Items from an Array with pop() and shift()
// >
// We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));


// --
// Remove Items Using splice()
// >
// We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(2,1);
arr.splice(3,2);
console.log(arr);


// --
// Add Items Using splice()
// >
// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// --
// Copy Array Items Using slice()
// >
// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
function forecast(arr) {
    let r = arr.slice(2,4);
    return r;
}
  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// --
// Copy an Array with the Spread Operator
// >
// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));


// --
// Combine Arrays with the Spread Operator
// >
// We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun'];
    return sentence;
  }
  
  console.log(spreadOut());


// --
// Check For The Presence of an Element With indexOf()
// >
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
function quickCheck(arr, elem) {
    return arr.indexOf(elem)>-1 ? true : false;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// --
// Iterate Through All an Array's Items Using For Loops
// >
// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem)== -1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


// --
// Create complex multi-dimensional arrays
// >
// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.
let myNestedArray = [
  [['deep',['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['deeper',['deepest','loop', 'shift', 6, 7, 1000, 'method']],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]
];


// --
// Add Key-Value Pairs to JavaScript Objects
// >
// A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods["bananas"] = 13;
foods["grapes"]=35;
foods["strawberries"] = 27;

console.log(foods);



