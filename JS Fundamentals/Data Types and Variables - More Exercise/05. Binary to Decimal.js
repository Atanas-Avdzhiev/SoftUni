function solve(binary) {

    let sum = 0;
    let a = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        let currentIndex = Number(binary[i]);
        let currentSum = (Math.pow(2, a)) * currentIndex;
        sum += currentSum;
        a++;
    }
    console.log(sum)
}
solve('11110000')