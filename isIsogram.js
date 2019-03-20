// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Write and test a function that determines whether a string is an isogram.

// Notes:
// * Assume your input is only letters.
// * Assume the empty string is an isogram.
// * Ignore case.
// * Follow the pseudocode exactly!

// Starter Code:

// function isIsogram(text) {
//   // add each char to a set
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//   // note: a set drops dup values
//   // thus, to see if all the chars were unique,
//   // check length of text and the size of the set
// }



function isIsogram(text) {
  let newSet = new Set(text.toLowerCase());
  return text.length === newSet.size ? true : false;
}



// Your Code Should Pass:
//
// describe('isIsogram', function() {
//   it('handles_Dermatoglyphics', function() {
//     expect(isIsogram('Dermatoglyphics')).toBe(true);
//   });
//   it('handles_aba', function() {
//     expect(isIsogram('aba')).toBe(false);
//   });
//   it('handles_case_properly', function() {
//     expect(isIsogram('fleEcy')).toBe(false);
//   });
// });
