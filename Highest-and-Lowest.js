// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

// First Solution



function highAndLow(numbers){
    let removeSpace = numbers.split(' ')
    let lowestNum = Math.min(...removeSpace)
    let highestNum = Math.max(...removeSpace)
    return `${highestNum} ${lowestNum}`
  }
  
  // Take string
  // Put string into variable
  // Remove space from string
  // Put each number in array
  // Get lowest number in array and store it
  // Get highest number in array and store it
  
// Second Solution

const highAndLow = numbers => {
    let numbersInArray = numbers.split(' ');
    return `${Math.max(...numbersInArray)} ${Math.min(...numbersInArray)}`
  }