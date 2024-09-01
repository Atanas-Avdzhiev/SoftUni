function solve(array) {

    let sums = array.length - 1;
    while (sums > 0) {

        for (let i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
                array[i] = array[i] + array[i + 1];
            }
        }
        array.length -= 1;
        sums -= 1;
    }
    console.log(Number(array))
}
solve([5, 0, 4, 1, 2])