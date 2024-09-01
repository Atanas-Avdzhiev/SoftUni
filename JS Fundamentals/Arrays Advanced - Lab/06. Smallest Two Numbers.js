function solve(array) {

    array.sort((a, b) => a - b);
    console.log(array[0], array[1]);

}
solve([30, 15, 50, 5])