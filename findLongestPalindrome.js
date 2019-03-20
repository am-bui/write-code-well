// Find the longest single-word palindrome within a phrase.
// The phrase will only contain letters (no symbols, punctuation, or numbers).
// Your palindrome detection should be case-insensitive.
// If there are multiple longest palindromes of equal length, return the last one.

// Starter Code:

// function findLongestPalindrome(sentence) {
//   // split sentence into words
//   // iterate words and collect the palindromes
//   // sort the list of palindromes by word length
//   // return the largest item in the sorted list
// }
//
//
// function reverseString(string) {
// }
//
// function isPalindrome(word) {
//   // hint: you can detect palindromes by comparing a string to its reverse
// }
//
// function sortAscendingByLength(a, b) {
// }



function findLongestPalindrome(sentence) {
 return sentence.split(' ').filter(i => isPalindrome(i)).sort((a, b) => a.length - b.length).pop();
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  word = word.toLowerCase();
  return reverseString(word) === word;
}



// Your Code Should Pass:
//
// describe('findLongestPalindrome', function() {
//   it('should_find_last_of_two_equal_length_palindromes', function() {
//     var input = 'Our civic duty is to kayak';
//     var actual = findLongestPalindrome(input);
//     var expected = 'kayak';
//     expect(actual).toBe(expected);
//   });
//
//   it('should_find_the_longest_palindrome', function() {
//     var input = 'Our civic duty is to kayak without a rotator as you well know';
//     var actual = findLongestPalindrome(input);
//     var expected = 'rotator';
//     expect(actual).toBe(expected);
//   });
//
//   it('should_find_a_mixed_case_palindrome', function() {
//     var input = 'Our civic duty is to kayak without a RoTaToR as you well know';
//     var actual = findLongestPalindrome(input);
//     var expected = 'RoTaToR';
//     expect(actual).toBe(expected);
//   });
// });
