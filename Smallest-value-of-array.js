// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// First Solution (more verbose)

function min(arr, toReturn) {
    let lowestnum = Math.min(...arr)
    let lowestnumindex = arr.indexOf(lowestnum)
    if (toReturn === 'value'){
      return lowestnum
    } else if (toReturn === 'index'){
      return lowestnumindex
    }
  }

// Second Solution

const min = (arr, toReturn) => toReturn === 'index'? arr.indexOf(Math.min(...arr)) : Math.min(...arr);

