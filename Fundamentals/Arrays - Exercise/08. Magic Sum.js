function solve(array, number) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                console.log(array[i], array[j]);
            }
        }
    }

}
solve([14, 20, 60, 13, 7, 19, 8], 27)