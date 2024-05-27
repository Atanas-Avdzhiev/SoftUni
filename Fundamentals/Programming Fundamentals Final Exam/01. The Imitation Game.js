function solve(input) {

    let message = input.shift();

    let command = input.shift();

    while (command !== 'Decode') {

        let commandArray = command.split('|');
        const firstCommand = commandArray[0];

        switch (firstCommand) {
            case 'Move':
                const numberOfLetters = Number(commandArray[1]);
                let partToMove = message.substring(0, numberOfLetters);
                let restOfMessage = message.slice(numberOfLetters);
                message = restOfMessage + partToMove;
                break;

            case 'Insert':
                const index = Number(commandArray[1]);
                const value = commandArray[2];
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index);
                message = firstPart + value + secondPart;
                break;

            case 'ChangeAll':
                const substring = commandArray[1];
                const replacement = commandArray[2];
                let messageArray = message.split('');
                let newArray = messageArray.map(x => {
                    if (x === substring) {
                        return replacement;
                    }
                    else {
                        return x;
                    }
                })
                message = newArray.join('');
                break;
        }

        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
solve(['zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'])