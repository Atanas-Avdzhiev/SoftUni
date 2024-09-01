function solve(array) {

    let list = [];

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' ');
        let name = currentCommand[0];

        if (currentCommand[2] !== 'not') {
            let includes = list.includes(name);
            if (includes === false) {
                list.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        }
        else {
            let includes = list.includes(name);
            if (includes === true) {
                list = list.filter(x => x !== name);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
solve(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])