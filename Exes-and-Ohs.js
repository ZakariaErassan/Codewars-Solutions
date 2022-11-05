// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// First Solution

function XO(str) {
    let amountOfx = ''
    let amountOfo = ''
    let userStr = str
    let userInput = userStr.toLowerCase().split('')
    for (let i = 0; i < userInput.length; i++){
      let char = userInput[i]
      if (char == 'o'){
        amountOfo += char
      } else if (char == 'x') {
        amountOfx += char
      } else {
        continue
      }
    }if (amountOfx.length == amountOfo.length){
      return true;
    } else {
      return false
    }
    
}