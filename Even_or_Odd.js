//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//First Solution
function even_or_odd(number) {
    let givenNumber = number
    if (givenNumber % 2 === 0){
        return `Even`
    } else return `Odd`
}