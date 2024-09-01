function solve(array, number) {

    for (let i = 0; i <= number - 1; i++) {
        array[array.length] = array[i];
    }
    let result = [];

    for (let i = number; i < array.length; i++) {
        result[i - number] = array[i];
    }
    console.log(result.join(' '))
}
solve([2, 4, 15, 31], 5)