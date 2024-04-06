function solve(array) {
    let rotations = Number(array[array.length - 1]);
    array.pop();
    for (let i = rotations; i >= 1; i--) {
        array.unshift(array[array.length - 1]);
        array.pop();
    }
    console.log(array.join(' '))
}
solve(['1', '2', '3', '4', '2'])