function solve(array) {
    const sum = array[0].reduce((acc, num) => acc + num, 0);
    let isMagic = true;
    for (let i = 0; i < array.length; i++) {
        let rowSum = array[i].reduce((acc, num) => acc + num, 0);
        if (rowSum !== sum) {
            isMagic = false;
            break;
        }
    }

    for (let j = 0; j < array[0].length; j++) {
        let colSum = 0;
        for (let i = 0; i < array.length; i++) {
            colSum += array[i][j];
        }
        if (colSum !== sum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);

}
solve([[11, 32, 45],

[21, 0, 1],

[21, 1, 1]])