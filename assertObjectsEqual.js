// Write an “assertObjectsEqual” function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify().
// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

// Examples:

// SUCCESS CASE

// var person = {
//   firstName: 'Joe',
//   lastName: 'Blow'
// };
// person = updateObject(person, 'firstName', 'Jack');

// var expected = {
//   firstName: 'Jack',
//   lastName: 'Blow'
// };

// assertObjectsEqual(person, expected, 'updates person's existing first name field');
// // console output: passed

// FAILURE CASE

// var person = {
//   firstName: 'Joe',
//   lastName: 'Blow'
// };
// person = updateObject(person, 'age', 35);

// var expected = {
//   firstName: 'Joe',
//   lastName: 'Blow',
//   age: 35
// };
// assertObjectsEqual(person, expected, 'adds person's non-existing age field');
// // console output: FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}



function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  actual === expected ? console.log ('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}



// Your Code Should Pass:
//
// describe('assertObjectsEqual', function() {
//   it('should_handle_success_case', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = {foo: 5, bar: 6};
//     var actual = {foo: 5, bar: 6}
//     assertObjectsEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toBe('passed');
//
//     console.log = originalLogger;
//   });
//
//
//   it('should_render_proper_failure_message', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = {foo: 6, bar: 5};
//     var actual = {foo: 5, bar: 6}
//     assertObjectsEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toContain('FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}');
//
//     console.log = originalLogger;
//   });
//
//   it('should_fail_if_objects_not_same_size', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = {foo: 5, bar: 6};
//     var actual = {foo: 5, bar: 6, baz: 7}
//     assertObjectsEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toContain('FAILED [my test] Expected {"foo":5,"bar":6}, but got {"foo":5,"bar":6,"baz":7}');
//
//     console.log = originalLogger;
//   });
// });
