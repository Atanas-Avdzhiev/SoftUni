function solve(array) {

    let step = Number(array[array.length - 1]);
    let string = '';
    for (let i = 0; i < array.length - 1; i += step) {
        string += array[i] + ' ';
    }
    console.log(string);
}
solve(['1', '2', '3', '4', '5', '6'])