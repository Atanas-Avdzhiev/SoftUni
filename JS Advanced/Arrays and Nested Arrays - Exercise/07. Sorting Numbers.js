function solve(array) {

    array.sort((a, b) => a - b);
    let result = [];
    let arrayLength = array.length;

    for (let i = 0; result.length < arrayLength; i++) {
        if (i % 2 === 0) {
            result.push(array.shift());
        }
        else {
            result.push(array.pop());
        }
    }
    return result;
}
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])