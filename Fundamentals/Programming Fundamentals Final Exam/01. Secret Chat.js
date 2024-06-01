function solve(input) {

    let message = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {
        let commandArray = command.split(':|:');
        let commandName = commandArray[0];
        switch (commandName) {
            case 'InsertSpace': {
                let index = Number(commandArray[1]);
                let firstPart = message.slice(0, index);
                let lastPart = message.slice(index);
                message = firstPart + ' ' + lastPart;
                console.log(message);
                break;
            }
            case 'Reverse': {
                let substring = commandArray[1];
                if (message.includes(substring)) {
                    message = message.replace(substring, '');
                    substring = substring.split('').reverse().join('');
                    message = message + substring;
                    console.log(message);
                }
                else {
                    console.log('error');
                }
                break;
            }
            case 'ChangeAll': {
                let substring = commandArray[1];
                let replacement = commandArray[2];
                let regex = new RegExp(substring, 'g');
                message = message.replace(regex, replacement);
                console.log(message);
                break;
            }
        }
        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
solve(['Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])