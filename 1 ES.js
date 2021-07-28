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

