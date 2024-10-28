function solve(array, rotations) {

    for (let i = 1; i <= rotations; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(' '));
}
solve(['Banana',

    'Orange',

    'Coconut',

    'Apple'],

    15)