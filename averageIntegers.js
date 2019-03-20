// Use the skeleton provided to write a working implementation.

// Notes:
// * Do not leave any functions in the skeleton unused.
// * Test that your implementation works.

// Specifically – your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
// a) the categorical reasoning displayed by your tests
// b) the line(s) of output in the console log saying “passed” coming from those tests

// Starter Code:
// ```
// // Skeleton
// function average(numbers) {
// // process array of numbers
// }

// function sum(numbers) {
// }
// ```



function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b);
}



// Your Code Should Pass:
//
// describe('average function', function() {
//   it('should_evaluate_correctly', function() {
//     var input = [1, 2, 4, 8, 2, 1];
//     var expected = 3;
//     var actual = average(input);
//     expect(actual).toBe(expected);
//   });
//
//   it('should_use_the_sum_helper_function', function() {
//     var body = average.toString();
//     expect(/sum/.test(body)).toBe(true);
//   });
// });
