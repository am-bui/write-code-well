// Flesh out the implementation and test it.
// Implementation of WHAT, you say? What’s the problem statement???
// Well, you should be able to tell what this code is intended to do just from reading the starter “skeleton”.
// Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don’t need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

// ===
// Some notes about the skeleton:

// When you create such “skeletons” for your own programs, this is a good full-fledged sample to bear in mind.
// Note the mixture of real “stub” code and pseudocode.
// The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.
// The pseudocode style we want for this purpose is at the level of precise English. It also is not describing for-loops and whatnot. It also is only inside functions. Don’t pseudocode functions, just write the functions as empty stubs. That saves you precious time later, with less rewriting.

// Starter Code:

// function findMaxRepeatCountInWord(word) {
//   // Break up individual words into individual letters.
//   // Count the instances of each letter
//   // Iterate all the counts and find the highest
//   // Return this word's max repeat count
// }
//
// function findFirstWordWithMostRepeatedChars(text) {
//   var maxRepeatCountOverall = 0;
//   var wordWithMaxRepeatCount = '';
//
//   // Break up input text into words (space-delimited).
//   // For each word...
//       var repeatCountForWord = findMaxRepeatCountInWord(word)
//       //  If that max repeat count is higher than the overall max repeat count, then
//       //    update maxRepeatCountOverall
//       //    update wordWithMaxRepeatCount
//
//   return wordWithMaxRepeatCount;
// }



function findMaxRepeatCountInWord(word) {
  return Math.max(...Object.values(word.split('').reduce((acc, curr) => {
    !acc[curr] ? acc[curr] = 1 : acc[curr]++;
    return acc;
  },{})))
};

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  text.split(' ').forEach(function(word) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
    if(repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord; wordWithMaxRepeatCount = word;
    }
  });
  return wordWithMaxRepeatCount;
}



// Your Code Should Pass:

// describe('findFirstWordWithMostRepeatedChars', function() {
//   it('should_find_first_of_two_equal_length_words', function() {
//     var input = 'foo bar bazz';
//     var actual = findFirstWordWithMostRepeatedChars(input);
//     var expected = 'foo';
//     expect(actual).toBe(expected);
//   });

//   it('should_find_longest_word', function() {
//     var input = 'foo bar bazzz';
//     var actual = findFirstWordWithMostRepeatedChars(input);
//     var expected = 'bazzz';
//     expect(actual).toBe(expected);
//   });
// });
