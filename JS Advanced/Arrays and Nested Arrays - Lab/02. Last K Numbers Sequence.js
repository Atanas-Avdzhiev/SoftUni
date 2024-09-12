function solve(n, k) {

    let array = [1,];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let numsToSum = array.slice(startIndex, i);
        let sum = numsToSum.reduce((accumulator, number) => accumulator + number);
        array[i] = sum;

    }
    return array;
}
solve(8, 2)