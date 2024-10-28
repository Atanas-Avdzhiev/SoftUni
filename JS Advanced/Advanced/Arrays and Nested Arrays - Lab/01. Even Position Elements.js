function solve(array) {
    let string = '';

    for (let i = 0; i < array.length; i += 2) {
        string += array[i] + ' ';
    }
    console.log(string.trim());
}
solve(['20', '30', '40', '50', '60'])