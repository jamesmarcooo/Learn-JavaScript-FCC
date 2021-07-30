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


// --
// Find More Than the First Match
// >
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


// --
// Match Anything with Wildcard Period
// >
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


// --
// Match Single Character with Multiple Possibilities
// >
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


// --
// Match Letters of the Alphabet
// >
// Match all the letters in the string quoteSample.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// --
// Match Numbers and Letters of the Alphabet
// >
// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// --
// Match Single Characters Not Specified
// >
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// --
// Match Characters that Occur One or More Times
// >
// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);


// --
// Match Characters that Occur Zero or More Times
// >
// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
let chewieRegex = /Aa*/; // Change this line

let result = chewieQuote.match(chewieRegex);


//--
// Find Characters with Lazy Matching
// >
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


// --
// Find One or More Criminals in a Hunt
// >
// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
let reCriminals = /C+/; 


// --
// Match Beginning String Patterns
// >
// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


// --
// Match Ending String Patterns
// >
// Use the anchor character ($) to match the string caboose at the end of the string caboose.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);


// --
// Match All Letters and Numbers
// >
// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


// --
// Match Everything But Letters and Numbers
// >
// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// --
// Match All Numbers
// >
// Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;


// --
// Match All Non-Numbers
// >
// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;


