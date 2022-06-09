// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


// First Solution

function createPhoneNumber(numbers){
  
    // First Half
    let arr = numbers.slice(0,3)
    arr.push(')')
    arr.unshift('(')
    let convertArrToStr = arr.map(String).join('')
  //   return convertArrToStr
    
    // Second Half
    
    let endArr = numbers.slice(3,10)
    let firstHalf = endArr.slice(0,3).map(String).join('')
    let secondHalf = endArr.slice(3,7).map(String).join('')
    return `${convertArrToStr} ${firstHalf}-${secondHalf}`
  }