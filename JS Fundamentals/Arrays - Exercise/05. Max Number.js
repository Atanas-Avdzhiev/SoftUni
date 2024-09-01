function solve(array) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            string += array[i] + ' ';
        }
    }
    console.log(string)
}
solve([14, 24, 3, 19, 15, 17])