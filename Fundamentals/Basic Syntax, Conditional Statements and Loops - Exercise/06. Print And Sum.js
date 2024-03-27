function printSum(start, end) {

    let a = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        a += i + " ";
        sum += i;
    }

    console.log(a)
    console.log(`Sum: ${sum}`)
}
printSum(5, 10)