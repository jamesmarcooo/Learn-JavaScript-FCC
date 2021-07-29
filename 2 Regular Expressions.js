// --
// Using the Test Method
// >
// Apply the regex myRegex on the string myString using the .test() method.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


// --
// Match a Literal String with Different Possibilities
// >
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);


// --
// Ignore Case While Matching
// >
// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);


// --
// Extract Matches
// >
// Apply the .match() method to extract the string coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line









