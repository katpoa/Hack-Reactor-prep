// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

function detectOutlierValue(string) {
  var nums = string.split(' ');
  var evens = [];
  var odds = [];
  for (var i = 0; i < nums.length; i++) {
    var current = Number(nums[i]);
    if (current % 2 === 0) {
      evens.push({
        value: current,
        index: i + 1
      })
    } else {
      odds.push({
        value: current,
        index: i + 1
      }) 
    }
  }
  if (evens.length === 1) {
    return evens[0].index;
  } else if (odds.length === 1) {
    return odds[0].index;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
  }
}

// test cases
var actual = detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
var expected = 3;
assertEqual(actual, expected, 'should find the odd one out with all even numbers');

var actual1 = detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
var expected1 = 2;
assertEqual(actual1, expected1, 'should find the odd one out with all odd numbers');
