function solve(array) {
    let sumFirst = 0;
    let sumSecond = 0;

    for (let i = 0; i < array.length; i++) {
        sumFirst += array[i][i];
        sumSecond += array[array.length - 1 - i][i];
    }
    console.log(sumFirst, sumSecond);
}
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])