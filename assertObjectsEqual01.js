// Write an “assertObjectsEqual” function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.
// Then use your assertion function to thoroughly test the function provided.
// Use categorical reasoning to consider all the useful cases.
// Debug the code under test, if necessary.



function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj[lastName];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  if (Object.keys(actual).length === Object.keys(expected).length && Object.entries(actual).every(function ([key, value]) {
      return value === expected[key];})) {
        console.log('Yay! Passed!');
      } else {
        console.log(`FAILED [${testName}]. Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
      }
}

const testObj1 = {firstName: 'Ai Mi', lastName: 'Bui'};
const testObj2 = {firstName: 'Ai Mi', lastName: 'Bui', fullName: 'Ai Mi Bui'};
const testObj3 = {firstName: 'Lucy', lastName: 'Gillman'};
const testObj4 = {firstName: 'Ai Mi'};
const testObj5 = {};

// test assertObjectsEqual function:

assertObjectsEqual(testObj1, {firstName: 'Ai Mi', lastName: 'Bui'}, 'objects of acutal and expected match' );// pass

assertObjectsEqual(testObj2, testObj1, 'objects of actual and expected have same number of properties');// expected fail: different lengths

assertObjectsEqual(testObj3, testObj1, 'objects of actual and expected have same values');// expected fail: different values

// test addFullNameProp function:

assertObjectsEqual(addFullNameProp(testObj2), testObj1, 'object with properties firstName and lastName only');// expected fail

assertObjectsEqual(addFullNameProp(testObj4), testObj1, 'object contains firstName and lastName');// expected fail

assertObjectsEqual(addFullNameProp(testObj5), {}, 'empty object');// pass
