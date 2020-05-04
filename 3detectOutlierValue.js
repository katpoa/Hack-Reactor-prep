// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

function detectOutlierValue(string) {
  var nums = string.split(' ');
  for (var i = 1; i < nums.length; i++) {
    nums[0] = Number(nums[0]);
    nums[i] = Number(nums[i]);
    var mod = nums[0] % 2;
    if (nums[i] % 2 === 0 && mod === 0) {
      mod = 1;
    } else if (nums[i] % 2 === 1 && mod === 1) {
      mod = 0;
    } 
  }
  for (var j = 1; j < nums.length; j++) {
    if (mod === 1 && nums[j] % 2 === 1 || mod === 0 && nums[j] % 2 === 0) {
      var index = j + 1;
      return index;
    }
  }
}
// better way to do this is separate numbers into evens and odds, and whichever array has length 1, find and return index of that number in original number order


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
assertEqual(actual, expected, 'should find the odd one out with all odd numbers');
