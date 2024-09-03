function solve(input) {

    let string = input.shift();
    let command = input.shift();

    while (command !== 'Done') {

        let commandArray = command.split(' ');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'Change': {
                let char = commandArray[1];
                let replacement = commandArray[2];
                while (string.includes(char)) {
                    string = string.replace(char, replacement);
                }
                console.log(string);
            }
                break;
            case 'Includes': {
                let substring = commandArray[1];
                if (string.includes(substring)) {
                    console.log('True');
                }
                else {
                    console.log('False');
                }
            }
                break;
            case 'End': {
                let substring = commandArray[1];
                let substringLength = substring.length;
                let stringLength = string.length;
                let lastPart = string.slice(stringLength - substringLength);
                if (substring === lastPart) {
                    console.log('True');
                }
                else {
                    console.log('False');
                }
            }
                break;
            case 'Uppercase': {
                string = string.toUpperCase();
                console.log(string);
            }
                break;
            case 'FindIndex': {
                let char = commandArray[1];
                let index = string.indexOf(char);
                console.log(index);
            }
                break;
            case 'Cut': {
                let startIndex = Number(commandArray[1]);
                let count = Number(commandArray[2]);
                cuttedChars = string.slice(startIndex, startIndex + count);
                console.log(cuttedChars);
            }
                break;
        }

        command = input.shift();
    }
}
solve(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])