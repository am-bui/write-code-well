// [evaluation 01]

// Take a look at the following lines of code:
//
// var x = [1, 2, 3];
// var y = [4, 5, 6];
// var z = x;
//
// z[2] = y[0];
// z[1] = y[2];
// y[1] = z[1];
// x[0] = y[0];
// x[2] = 1;
//
// What is the final value of x?
//
// IMPORTANT: DO NOT just rewrite this code and run it in a terminal.
//
// There is ZERO POINT to that, you’d just be cheating yourself.
//
// Having the computer keep track of the variable assignments for you does not help you learn!!!



var answer = {
  finalValueOfX: [4, 6, 1], // FILL THIS IN
  finalValueOfY: [4, 6, 6], // FILL THIS IN
  finalValueOfZ: [4, 6, 1], // FILL THIS IN
};



// Your Code Should Pass:
//
// describe('variable juggling with objects', function() {
//   it('should_evaluate_X_correctly', function() {
//     var actual = JSON.stringify(answer.finalValueOfX);
//     var expected = JSON.stringify([4, 6, 1]);
//     // Note: intentionally hiding the expected value.
//     expect(actual === expected).toBe(true);
//   });
//
//   it('should_evaluate_Y_correctly', function() {
//     var actual = JSON.stringify(answer.finalValueOfY);
//     var expected = JSON.stringify([4, 6, 6]);
//     // Note: intentionally hiding the expected value.
//     expect(actual === expected).toBe(true);
//   });
//
//   it('should_evaluate_Z_correctly', function() {
//     var actual = JSON.stringify(answer.finalValueOfZ);
//     var expected = JSON.stringify([4, 6, 1]);
//     // Note: intentionally hiding the expected value.
//     expect(actual === expected).toBe(true);
//   });
// });
