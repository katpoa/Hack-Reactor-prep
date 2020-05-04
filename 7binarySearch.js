/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the max half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the min half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

// compared to array.indexOf(31)?

function binarySearch(array, target) {
  var min = array[0];
  var max = array[array.length - 1];
  while (min <= max) {
    var mid = Math.floor((min + max)/2);
    console.log(mid);
    if (target === mid) {
      return array.indexOf(mid);
    } else if (target > mid) {
      min = mid + 1;
      var mid = Math.floor((min + max)/2);
      console.log(mid);
      if (target === mid) {
        return array.indexOf(mid);
      } else if (target < mid) {
        max = mid - 1;
        var mid = Math.floor((min + max)/2);
        console.log(mid);
        if (target === mid) {
          return array.indexOf(mid);
        }
        break;
      }
      // break;
    } else if (target < mid) {
      max = mid - 1;
      var mid = Math.floor((min + max)/2);
      if (target === mid) {
        return array.indexOf(mid);
      } else if (target > mid) {
        min = mid + 1;
        var mid = Math.floor((min + max)/2);
        if (target === mid) {
          return array.indexOf(mid);
        }
        break;
      }
      // break;
    }
  }
  return null;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILURE [${testName}] Expected ${expected} but got ${actual}`);
  }
}

var sorted = [1, 3, 16, 22, 31, 33, 34];
var actual = binarySearch(sorted, 31);
var expected = 4;
assertEqual(actual, expected, 'should return the index of the target value in the given array');

var actual1 = binarySearch(sorted, 25);
var expected1 = null;
assertEqual(actual1, expected1, 'should return null when target value is not found in array');

var sorted1 = [1, 3, 4, 5, 11, 15, 16, 22, 31, 33, 34, 36, 40];
var actual2 = binarySearch(sorted1, 31);
var expected2 = 8;
assertEqual(actual, expected, 'should return the index of the target value in the given array');
