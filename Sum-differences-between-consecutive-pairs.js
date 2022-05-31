// Your task is to sum the differences between consecutive pairs in the array in descending order. 

// First Solution 

function SumOfDifferences(arr){
    let descending = arr.sort(function(a,b){return b - a})
    let sum = 0
    for (let i = 0; i < arr.length-1; i++){
        sum += arr[i] - arr[i + 1]
    } return sum;
}
