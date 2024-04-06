function solve(array) {
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < array.length; i++) {
        firstSum += array[i];
        if (array[i] % 2 === 0) {
            array[i] += i;
        }
        else {
            array[i] -= i;
        }
        secondSum += array[i];
    }
    console.log(array)
    console.log(firstSum)
    console.log(secondSum)
}
solve([5, 15, 23, 56, 35])