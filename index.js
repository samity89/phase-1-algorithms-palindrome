function isPalindrome(word) {
  if(word.split('').reverse().join('') === word) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/

// function receives a string (the argument)
// checks to see if when string is reversed, is the same

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
