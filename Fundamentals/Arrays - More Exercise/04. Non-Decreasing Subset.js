function solve(array) {
    let biggestNumber = array[0];
    let result = [];
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggestNumber) {
            result[index] = array[i];
            biggestNumber = array[i];
            index++;
        }
    }
    console.log(result.join(' '))
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);