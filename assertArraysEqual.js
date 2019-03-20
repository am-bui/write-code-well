// Write an “assertArraysEqual” function from scratch.
// Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).
// Do not use JSON.stringify(), Array.join(), or any other “convert the array to a string so I can compare two strings” type of technique to implement this.

// Examples:

// SUCCESS CASE
// var expected = ['b', 'r', 'o', 'k', 'e', 'n']; var actual = 'broken'.split(''); assertArraysEqual(actual, expected, 'splits string into array of characters'); // console output: // passed
// FAILURE CASE
// var expected = [1, 1, 2, 3, 5, 8, 13]; var actual = generateFirstNFibonaccis(7); assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers'); // console output: // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"



function assertArraysEqual(actual, expected, testName) {
  if (actual.length !== expected.length) {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    return;
  }
  for (var i = 0; i < actual.length; ++i) {
    if (actual[i] !== expected[i]) {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
      return;
    }
} console.log('passed');
};



// Your Code Should Pass:
//
// describe('assertArraysEqual', function() {
//   it('should_handle_success_case_for_numbers', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = [-5, 0, 5];
//     var actual = [-5, 0, 5];
//     assertArraysEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toBe('passed');
//
//     console.log = originalLogger;
//   });
//
//   it('should_use_triple_equals_comparison', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = [-5, '0', 5];
//     var actual = [-5, 0, 5];
//     assertArraysEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toContain('FAILED');
//
//     console.log = originalLogger;
//   });
//
//   it('should_render_proper_failure_message', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = [1, 2, 3];
//     var actual = [1, 2, 4];
//     assertArraysEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toContain('FAILED [my test] Expected "1,2,3", but got "1,2,4"');
//
//     console.log = originalLogger;
//   });
//
//   it('should_fail_if_arrays_not_same_size', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = [1, 2, 3];
//     var actual = [1, 2, 3, 4];
//     assertArraysEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toContain('FAILED [my test] Expected "1,2,3", but got "1,2,3,4"');
//
//     console.log = originalLogger;
//   });
//
//   it('should_not_use_JSON_stringify', function() {
//     var body = assertArraysEqual.toString();
//     expect(/stringify/.test(body)).toBe(false);
//   });
//
// });
