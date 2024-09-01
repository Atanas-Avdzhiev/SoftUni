function solve(first, second) {
    let array = [];
    for (let i = 0; i < first.length; i++) {
        if (i % 2 === 0) {
            array[i] = Number(first[i]) + Number(second[i]);
        }
        else {
            array[i] = first[i] + second[i];
        }
    }
    console.log(array.join(' - '))
}
solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])