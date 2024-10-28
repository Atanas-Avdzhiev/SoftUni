function solve(input = 5) {

    let star = '*';

    for (let i = 1; i <= input; i++) {
        star = '* '.repeat(input);
        console.log(star.trim());
    }
}
solve(7)