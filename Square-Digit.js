// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// First Solution

function squareDigits(num){
    let str = String(num)
    let splitted = str.split('')
    let squared = splitted.map(a => a ** 2)
    return concatenated = Number(squared.join(''))
  }

  // Second Solution

  function squareDigits(num){
    let splitNumIntoString = String(num).split('')
    let squaredNum = splitNumIntoString.map(a => a ** 2)
    return Number(squaredNum.join(''))
  }