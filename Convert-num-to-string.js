// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// First Solution (more verbose)

function numberToString (num){
    userInput = String(num)
    return userInput;
  }

// Second Solution

const numberToString = num => {return String(num)}