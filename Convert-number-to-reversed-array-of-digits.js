// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// First Solution

function convertNumber (num){
    return String(num).split('').map(Number).reverse()
}