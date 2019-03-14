// Take a look at the following steps of variable assignment:

// var x = 7;
// var y = 8;
// var z = 9;

// x = y + z;
// z = x;
// x = y;
// z = x + y;
// y = z - x;
// z = y;
// x = y * z;
// z = y / z;
// x = (z - x) / (y + z);

// What is the final value of x?



var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};



// Your Code Should Pass:

// describe('variable juggling with scalars', function() {
//   it('should evaluate value of x correctly', function() {
//     // Note: intentionally hiding the expected value.
//     expect(answer.finalValueOfX === -7).toBe(true);
//   });
// });
