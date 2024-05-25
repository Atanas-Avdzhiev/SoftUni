function solve(input) {

    let key = input.shift();
    let i = 0;
    let command = input[i];

    while (command !== 'Generate') {

        let arrayCommand = command.split('>>>');
        let firstCommand = arrayCommand[0];

        switch (firstCommand) {
            case 'Contains':
                if (key.includes(arrayCommand[1])) {
                    console.log(`${key} contains ${arrayCommand[1]}`);
                }
                else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let upperOrLower = arrayCommand[1];
                let startIndex = arrayCommand[2];
                let endIndex = arrayCommand[3];
                if (upperOrLower === 'Upper') {
                    let toReplace = key.slice(startIndex, endIndex);
                    let replaceWith = toReplace.toUpperCase();
                    key = key.replace(toReplace, replaceWith);
                }
                else if (upperOrLower === 'Lower') {
                    let toReplace = key.slice(startIndex, endIndex);
                    let replaceWith = toReplace.toLowerCase();
                    key = key.replace(toReplace, replaceWith);
                }
                console.log(key);
                break;
            case 'Slice':
                let startIndexSlice = arrayCommand[1];
                let endIndexSlice = arrayCommand[2];
                let before = key.slice(0, startIndexSlice);
                let after = key.slice(endIndexSlice);
                key = before + after;
                console.log(key);
                break;
        }

        i++;
        command = input[i];
    }
    console.log(`Your activation key is: ${key}`);
}
solve(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"])