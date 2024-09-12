function solve(array) {

    let biggestNumber = array[0][0];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            currentNumber = array[i][j];
            if (currentNumber > biggestNumber) {
                biggestNumber = currentNumber;
            }
        }
    }
    console.log(biggestNumber);
}
solve([[20, 50, 10], [8, 33, 145]])