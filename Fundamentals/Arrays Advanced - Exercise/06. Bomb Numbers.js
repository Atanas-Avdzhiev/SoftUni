function solve(array, bomb) {

    const specialNumber = bomb[0];
    const power = bomb[1];
    let countToDelete = power + power + 1;
    let sum = 0;
    let i = 0;
    
    while (i < array.length) {
        let currentNumber = array[i];

        if (currentNumber === specialNumber) {
            let startIndex = Math.max(0, i - power);
            array.splice(startIndex, countToDelete);
            i = startIndex;
        }
        else {
            i++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum)
}
solve([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],

    [2, 1])