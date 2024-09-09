function solve(n, m) {

    let first = +n;
    let second = +m;
    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += i;
    }
    console.log(sum);
}
solve('1', '5')