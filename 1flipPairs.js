// Flip every pair of characters in a string.


// Example:
var input = "check out how interesting this problem is, it\'s insanely interesting!";
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipCharacterPairs(string) {
  var flipped = "";  
  // split string into individual characters
  for (var i = 0; i < string.length; i+= 2) {
    if (string[i + 1] === undefined) {
      flipped += string[i];
      break;
    }
    flipped += string[i + 1];
    flipped += string[i];
    // string.splice(i, 2, string[i + 1], string[i]);
    // console.log(characters);
  }
  // add flipped characters to new array
  // return new array
  // characters.toString("");
  console.log(flipped);
  return flipped;
}

var actual = flipCharacterPairs(input);
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"

function assertEqual(actual, expected, testName) {
if (actual === expected) {
  console.log('passed');
} else {
  console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
}
}

assertEqual(actual, expected, 'should return string with every pair of characters flipped');
