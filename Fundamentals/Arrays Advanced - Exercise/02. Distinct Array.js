function solve(array) {
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = array[i];

        for (let j = i + 1; j < arrayLength; j++) {
            if (currentNumber === array[j]) {
                array.splice(j, 1);
                arrayLength--;
                j--;
            }
        }
    }
    console.log(array.join(' '));
}
solve([20, 8, 12, 13, 4, 4, 8, 5])