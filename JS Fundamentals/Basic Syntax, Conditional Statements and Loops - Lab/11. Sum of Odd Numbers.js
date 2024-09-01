function solve(number) {

    let a = -1;
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        a += 2
        console.log(a);
        sum += a;
    }

    console.log(`Sum: ${sum}`);

}
solve(5);