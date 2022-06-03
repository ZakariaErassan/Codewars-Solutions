// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// First Solution

function getCount(str) {
    let vowelsCount = 0;
    let strIntoArray = str.split('')
    let filterVowels = strIntoArray.filter(a => a ==='a' || a ==='e'|| a ==='i'|| a ==='o'|| a ==='u')
    for (let i = 0; i < filterVowels.length; i++){
      vowelsCount++
  }
    return vowelsCount
  }