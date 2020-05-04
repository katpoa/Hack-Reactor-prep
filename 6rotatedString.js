/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/
var single = 'hello world';
var double = 'hello worldhello world';
// console.log(double.length);
// console.log(double.substring(7, 18));
function rotateString(str1, str2) {
  var doubled = str1 + str1;
  // var rotated = '';
  // var n = doubled.indexOf(str2[0]);
  // rotated = doubled.substring(n, n + str1.length);
  if (doubled.includes(str2)) {
    // can also check if (doubled.indexOf(str2) !== -1)
    return true;
  }
  return false;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected} but got ${actual}`);
  }
}
var actual = rotateString('hello world', 'orldhello w');
var expected = true;
assertEqual(actual, expected, 'should check if input string 2 is a rotated version of input string 1');

var actual1 = rotateString('hello world', 'odrl hellow');
var expected1 = false;
assertEqual(actual1, expected1, 'should return false if str2 is not a rotated version of str1');

// Rotated string NO HINT VERSION

/*
function isRotated(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  var arr1 = str1.split('');
  var last = arr1.pop();
  arr1.unshift(last);
  while (arr1.join('') !== str1) {
    if (arr1.join('') === str2) {
      return true;
    }
    arr1.unshift(last);
  }
  return false
}
