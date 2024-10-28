function solve(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'add': result.push(i + 1);
                break;
            case 'remove': result.pop();
                break;
        }
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    }
    else {
        console.log('Empty');
    }
}
solve(['add',

    'add',

    'remove',

    'add',

    'add'])