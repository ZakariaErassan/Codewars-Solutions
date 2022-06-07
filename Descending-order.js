// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// First Solution

function descendingOrder(n){
    let numbers = String(n)
    let numbersInArr = numbers.split('')
    let numbersDescending = numbersInArr.sort(function(a,b) {return b - a})
    
    return Number(numbersDescending.join(''))
  }