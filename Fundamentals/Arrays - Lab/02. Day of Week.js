function solve(number) {

    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (number >= 1 && number <= 7) {
        console.log(week[number - 1])
    }
    else {
        console.log('Invalid day!')
    }
}
solve(3)