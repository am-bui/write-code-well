// Write an “assertArraysEqual” function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.
// Then use your assertion function to thoroughly test BOTH the functions in the provided code.
// Use categorical reasoning to consider all the useful cases.
// Debug the code under test, if necessary.

// For context: map is a function which should return a new array of transformed values. How are these values transformed? By calling callbackFunction and passing in each element of the array parameter during each loop.
// For example, if we asked you to map an array like [1, 2, 3, 4] with a function that multiplies all values by 10, the function map should return a new array with the values [10,20,30,40].
// Check how map is currently defined – does it accomplish exactly what we expect it to?
// Additionally, take a look at cubeAll. it supposedly uses map, passes in 1) an array of numbers, and 2) a function which multiplies a number by itself 3 times.

// Much like the previous exercise, you are to 1) debug map, 2) ensure cubeAll works as intended, 3) implement assertArraysEqual which should be able identify whether or not 2 arrays with scalar values are equivalent, and 4) create tests!

// Starter code (to restart your progress as necessary):

// function map(array, callbackFunction) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++){
//     newArray = newArray + callbackFunction(element);
//   });
//   return newArray;
// }
//
// function cubeAll(numbers) {
//   return map(numbers, function(n) {
//     return n * n;
//   });
// }
//
// function assertArraysEqual(actual, expected, testName) {
//   // your code here
// }
//
// //Create your tests below



const map = (array, callbackFunction) => {
  var newArr = [];
  array.forEach(i => newArr.push(callbackFunction(i)));
  return newArr;
}

const cubeAll = arrayOfNums => {
  if (Array.isArray(arrayOfNums) && arrayOfNums.length > 0) {
    return map(arrayOfNums, function(n) {
      if (typeof n === 'number') {
        return n ** 3
      } else {
          return ` NaN`;
      }
    })
  }
}

function assertArraysEqual(actual, expected, testName) {
  return JSON.stringify(actual) === JSON.stringify(expected) ? console.log(`Yay! Passed!`) : console.log(`FAILED [${testName}]. Expected ${expected}, but got ${actual}.`)
}

assertArraysEqual(cubeAll([1, 2, 3]), [1, 8, 27], 'should cube a positive number');
assertArraysEqual(cubeAll([-1, 2, 3]), [-1, 8, 27], 'should cube a negative number');
assertArraysEqual(cubeAll([0, 1, 2]), [0, 1, 8], 'should cube 0');
assertArraysEqual(cubeAll([]), undefined, 'returns undefined if array is empty');
assertArraysEqual(cubeAll('cube this'), undefined, 'returns undefined if is not an array');
assertArraysEqual(cubeAll(['this', 'is', 'cool']), [1, 8, 27], 'should cube a number');
