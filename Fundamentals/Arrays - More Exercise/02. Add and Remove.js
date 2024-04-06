function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'add') {
            result.push(i + 1);
        }
        else {
            result.pop();
        }
    }
    if (result.length > 0) {
        console.log(result.join(' '));
    }
    else {
        console.log('Empty');
    }

}
solve(['add', 'add', 'remove', 'add', 'add'])