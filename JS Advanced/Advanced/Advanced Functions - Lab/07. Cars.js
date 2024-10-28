function solve(input) {

    let mainObj = {};

    for (const line of input) {
        let [command, name, thirdOpt, fourthOpt] = line.split(' ');

        if (command === 'create') {

            if (thirdOpt === 'inherit') {
                mainObj[name] = Object.create(mainObj[fourthOpt]);
            } else {
                mainObj[name] = {};
            }
        } else if (command === 'set') {
            mainObj[name][thirdOpt] = fourthOpt;
        } else if (command === 'print') {
            let result = [];

            for (let key in mainObj[name]) {
                result.push(`${key}:${mainObj[name][key]}`);
            }
            console.log(result.join(','));
        }
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])