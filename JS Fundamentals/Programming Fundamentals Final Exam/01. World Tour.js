function solve(input) {

    let stops = input.shift();
    let command = input.shift();

    while (command !== 'Travel') {

        let commandArray = command.split(':');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'Add Stop':
                let index = Number(commandArray[1]);
                let string = commandArray[2];
                if (index >= 0 && index < stops.length) {
                    let firstPart = stops.slice(0, index);
                    let secondPart = stops.slice(index);
                    stops = firstPart + string + secondPart;
                }
                console.log(stops);
                break;
            case 'Remove Stop':
                let startIndex = Number(commandArray[1]);
                let endIndex = Number(commandArray[2]);
                if ((startIndex >= 0 && startIndex <= endIndex && endIndex < stops.length)) {
                    let part = stops.slice(startIndex, endIndex + 1);
                    stops = stops.replace(part, '');
                }
                console.log(stops);
                break;
            case 'Switch':
                let oldString = commandArray[1];
                let newString = commandArray[2];
                let regex = new RegExp(oldString, 'g');
                stops = stops.replace(regex, newString);
                console.log(stops);
                break;
        }

        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])