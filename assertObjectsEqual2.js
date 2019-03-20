// Write an “assertObjectsEqual” function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify(). However do not rely on object order to be consistant
// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

// Examples:

// SUCCESS CASE

// var person = { lastName: ‘Blow’, firstName: ‘Joe’ }; person = updateObject(person, ‘firstName’, ‘Jack’);

// var expected = { firstName: ‘Jack’, lastName: ‘Blow’ };

// assertObjectsEqual(person, expected, ‘updates person’s existing first name field’); // console output: // passed

// FAILURE CASE

// var person = { firstName: ‘Joe’, lastName: ‘Blow’ }; person = updateObject(person, ‘age’, 35);

// var expected = { firstName: ‘Joe’, lastName: ‘Blow’, age: 35 }; assertObjectsEqual(person, expected, ‘adds person’s non-existing age field’); // console output: // FAILED [adds person’s non-existing age field] Expected {“firstName”:”Joe”, “lastName”:”Blow”, age:35}, but got {“firstName”:”Joe”, “lastName”:”Blow”}



function assertObjectsEqual(actual, expected, testName) {
  for (key in actual) {
    if (expected[key] !== actual[key]) {
      return console.log(
      `FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}.`);
	  }
  }
  return console.log('passed');
}



// Your Code Should Pass:

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
//   it('should_handle_success_case_with_different_order', function() {
//     var originalLogger = console.log;
//     var capturedMessage = '';
//     console.log = function(message) {
//       capturedMessage = message;
//     }
//
//     var expected = {bar: 6, foo: 5};
//     var actual = {foo: 5, bar: 6}
//     assertObjectsEqual(actual, expected, 'my test');
//
//     expect(capturedMessage).toBe('passed');
//
//     console.log = originalLogger;
//   });
//
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
