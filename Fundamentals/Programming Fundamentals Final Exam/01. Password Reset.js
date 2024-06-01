function solve(input) {

    let password = input.shift();
    let command = input.shift();

    while (command !== 'Done') {

        let commandArray = command.split(' ');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'TakeOdd':
                let newPassword = '';
                let passwordArray = password.split('');
                for (let i = 1; i < passwordArray.length; i += 2) {
                    newPassword += passwordArray[i];
                }
                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(commandArray[1]);
                let length = Number(commandArray[2]);
                let partToRemove = password.slice(index, index + length);
                password = password.replace(partToRemove, '');
                console.log(password);
                break;
            case 'Substitute':
                let substring = commandArray[1];
                let substitute = commandArray[2];
                if (password.includes(substring)) {
                    let regex = new RegExp(substring, 'g');
                    password = password.replace(regex, substitute);
                    console.log(password);
                }
                else {
                    console.log('Nothing to replace!');
                }
                break;
        }

        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])