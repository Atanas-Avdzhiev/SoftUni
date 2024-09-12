function solve(array) {

    newArray = array
        .filter((_, index) => index % 2 !== 0)
        .map((x) => x * 2)
        .reverse()
        .join(' ');
    return newArray;
}
solve([10, 15, 20, 25])