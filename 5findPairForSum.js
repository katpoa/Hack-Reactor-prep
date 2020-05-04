// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

function findPairForSum(numbers, target) {
  var pair = [];
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        pair.push(numbers[i], numbers[j]);
        
      }
    }
  }
  return pair;
}

function assertArraysEqual(actual, expected, testName) {
  var sameLength = actual.length === expected.length;
  var sameValues = true;
  for (var k = 0; k < actual.length; k++) {
    if (actual[k] !== expected[k]) {
      sameValues = false;
      break;
    }
  }
  if (sameLength && sameValues) {
    console.log('passed')
  } else {
    console.log(`FAILED [${testName}] Expected ${expected} but got ${actual}`)
  }
}

var actual = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var expected = [4, 5];
assertArraysEqual(actual, expected, 'should return an array of the pair that sums to target');

var actual1 = findPairForSum([3, 34, 4, 12, 5, 2], 11);
var expected1 = [];
assertArraysEqual(actual1, expected1, 'should return an array when computing the sum is not possible');
