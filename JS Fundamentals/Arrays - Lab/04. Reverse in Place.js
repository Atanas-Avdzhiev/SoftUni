function solve(array) {

    for (let i = 0; i < array.length / 2; i++) {
        let element = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = element;
    }

    let string = '';

    for (let i = 0; i < array.length; i++) {
        string += array[i];
        if (i < array.length - 1) {
            string += ' ';
        }
    }
    console.log(string);
}
solve(['33', '123', '0', 'dd'])