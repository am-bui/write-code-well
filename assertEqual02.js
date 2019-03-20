// Write an “assertEqual” function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.
// Then use your assertion function to thoroughly test the code.
// Use categorical reasoning to consider all the useful cases.
// Debug the code under test, if necessary.

// The code under test is a function called every – it currently does not work. every is an example of a “higher order” function, meaning that it takes as a parameter, another function (higher order functions can also return functions as values). This function takes two parameters; the first will be an array of scalar values, and the second parameter will be callbackFunction. Thus, when you are creating a test suite to verify that every works, you are going to need a function that you will use as an argument when you call every.
// Think about it like this: every is going to iterate over an array of scalar values, and apply a function (callbackFunction) to every value. This function MUST return a boolean value, mainly because we want every to tell us whether or not, EVERY value in the array returns true when the callbackFunction is called upon it.
// At this point, the general level of difficulty and complexity of the problems will increase. With that in mind, do not be disheartened if this takes you some time to figure out solutions. The first step will be to set up some tests for the code, then correct the errors in the implementation.

// Starter code (to restart your work as necessary):

// function every(array, callbackFunction) {
//   var doesEveryElementMatch = true;
//   for (var i = 0; i < array.length; i++) {
//     doesEveryElementMatch = callbackFunction(array[i]);
//   }
//   return doesEveryElementMatch;
// }
//
//
// function assertEqual(actual, expected, testName) {
//   // your code here
// }
//
// //Create test cases below to ensure that 'every' works as intended.



function assertEqual(actual, expected, testName) {
  return actual === expected ? console.log(`Yay! Passed!`) : console.log(`Sorry to break the news, but [${testName}] failed. Expected ${expected}, but got ${actual}.`);
}

function every(array, callbackFunction) {
  var doesItMatch = true;
  array.forEach(function(element) {
    doesItMatch = doesItMatch && callbackFunction(element);
  });
  return doesItMatch;
}

var heroes = [
    { name: "Spider-Man",   universe: "Marvel" },
    { name: "Star-Lord",    universe: "Marvel" },
    { name: "Dr. Strange",  universe: "Marvel" },
    { name: "Wonder Woman", universe: "DC"     }
];

var villains = [
    { name: "Magneto",    universe: "Marvel" },
    { name: "Thanos",     universe: "Marvel" },
    { name: "Ultron",     universe: "Marvel" },
    { name: "Redskull",   universe: "Marvel" }
];

function isMarvel(element) {
  return (element.universe === "Marvel");
};

assertEqual(every(heroes, isMarvel), false, "Are all Marvel");
assertEqual(every(villains, isMarvel), true, "Are all Marvel");
