function matrix(number) {
    let string = '';
    for (let i = 1; i <= number; i++) {
        let string = '';
        for (let j = 1; j <= number; j++) {
            string += number.toString() + ' ';
        }
        console.log(string)
    }
}
matrix(7)