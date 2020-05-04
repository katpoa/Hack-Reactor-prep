/* 
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.
*/

// Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> 
var expected = 'ohs axe trelpma';

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function flipEveryNChars(string, n) {
  var flipped = '';
  // for loop through our string adding -index- number to our counter each iteration
  var characters = string.split('');
  for (var i = 0; i < characters.length; i+= n) {
    // label this section of characters under new variable
    var current = characters.slice(i, i + n);
    // console.log(current);
    // starting from the last character, add each to flipped
    var reversed = current.reverse();
    var joined = reversed.join('');
    // for (var j = n - 1; j >= 0 ; j--) {
    //   if (current[j] === undefined) {
    //     break;
    //   }
    // }
    flipped += joined;    
  }
  return flipped;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
  }
}
assertEqual(output, expected, 'should return string with every n characters flipped');
