// Write an assertEqual function from scratch.

// It should compare actual and expected values with strict equality (not typecasting).

// Examples:

// SUCCESS CASE

// function multiplyByTwo(n) {
//   return n * 2;
// }
// var output = multiplyByTwo(2); // returns 4
// assertEqual(output, 4, 'it doubles 2 to 4');
// // console output: passed

// FAILURE CASE

// function multiplyByTwo(n) {
//   return (n * 2) + 1; // an incorrect implementation
// }
// var output = multiplyByTwo(2); // returns 5
// assertEqual(output, 4, 'it doubles 2 to 4');
// // console output: FAILED [it doubles 2 to 4] Expected "4", but got "5"



function assertEqual(actual, expected, testName) {
  actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}



// Your Code Should Pass:

// describe('assertEqual', function() {
//   it('should_handle_success_case_for_numbers', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var actual = 5;
//     var expected = 5;
//     assertEqual(actual, expected, 'my test');
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
//     var actual = 5;
//     var expected = '5';
//     assertEqual(actual, expected, 'my test');
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
//     var actual = 5;
//     var expected = 4;
//     assertEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toContain('FAILED [my test] Expected "4", but got "5"');
//
//     console.log = originalLogger;
//   });
//
// });
