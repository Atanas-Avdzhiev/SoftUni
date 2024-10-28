function solve(array) {

    array.sort((a, b) => a - b);
    let secondHalf = array.slice(Math.floor(array.length / 2));
    return secondHalf;

}
solve([4, 7, 2, 5])