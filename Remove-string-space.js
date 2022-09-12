// Simple, remove the spaces from the string, then return the resultant string.

// First Solution

function noSpace(x){
    return x.split(' ').join('')
  }

// Second Solution

let noSpace = x => {return x.split(' ').join('')}