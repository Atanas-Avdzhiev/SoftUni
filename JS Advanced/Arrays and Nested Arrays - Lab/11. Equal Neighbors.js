function solve(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {

            if (j < array[i].length - 1 && array[i][j] === array[i][j + 1]) {
                count++;
            }

            if (i < array.length - 1 && array[i][j] === array[i + 1][j]) {
                count++;
            }
        }
    }
    return count;
}
solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
