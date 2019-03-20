// Write an “assertEqual” function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.
// Then use your assertion function in a series of test cases to thoroughly test the code.
// Use categorical reasoning to consider all the useful cases.
// Debug the code under test, if necessary.

function square(n) {
  return n * n;
}

function assertEqual(actual, expected, testName) {
  actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
}

// assertEqual(square(5), 25, 'square this number'); 
