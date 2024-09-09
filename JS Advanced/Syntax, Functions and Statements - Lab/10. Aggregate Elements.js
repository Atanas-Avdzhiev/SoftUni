function solve(array) {

    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (const num of array) {
        sum += num;
        inverseSum += 1 / num;
        concat += num;
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
solve([1, 2, 3])