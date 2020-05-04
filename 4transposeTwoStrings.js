// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
// e.g. transposeTwoStrings(['Hello','World']);

// should output:
// H W  
// e o  
// l r  
// l l  
// o d

function transposeTwoStrings(array) {
  var transposed = '';
  var longer;
  var first = array[0];
  var second = array[1];
  if (first >= second) {
    longer = first;
  } else {
    longer = second;
  }
  for (var i = 0; i < longer.length; i++) {
    var current = '';
    var firstChar = first[i] || ' ';
    // using || as a short circuit operator
    var secondChar = second[i] || ' ';
    current += firstChar + ' ' + secondChar + '\n';
    transposed += current;
  }
  return transposed;
}

console.log(transposeTwoStrings(['Hello','World']));
console.log(transposeTwoStrings(['mousey','kitty']));
console.log(transposeTwoStrings(['some','things']));

// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
//   }
// }

// var actual = transposeTwoStrings(['Hello','World']);
// var expected = 
// "H W\ne o\nl r\nl l\no d\n";
// assertEqual(actual, expected, 'should return the given strings transposed up down');
