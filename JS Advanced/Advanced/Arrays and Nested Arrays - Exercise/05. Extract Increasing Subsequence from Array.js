function solve(array) {
    let result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= result[result.length - 1]) {
            result.push(array[i]);
        }
    }
    return result;
}
solve([1, , 3, 8, 4, 10, 12, 3, 2, 24])

// Very good alternative with reduce

function extractNonDecreasingSubset(arr) {
    return arr.reduce((acc, num) => {
        if (acc.length === 0 || num >= acc[acc.length - 1]) {
            acc.push(num);
        }
        return acc;
    }, []); // here you set that the acc is an empty array at first;
}

// Example usage:

console.log(extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])); // [1, 3, 8, 10, 12, 24]
console.log(extractNonDecreasingSubset([1, 2, 3, 4]));                   // [1, 2, 3, 4]
console.log(extractNonDecreasingSubset([20, 3, 2, 15, 6, 1]));           // [20]