function solve(array) {

    let targets = array.shift().split(' ').map(Number);
    let i = 0;
    let command = array[i];

    while (command !== "End") {

        let splittedCommand = command.split(' ');
        let firstCommand = splittedCommand[0];
        let index = Number(splittedCommand[1]);
        let thirdElement = Number(splittedCommand[2]);

        switch (firstCommand) {
            case 'Shoot':

                if (index >= 0 && index < targets.length) {
                    targets[index] -= thirdElement;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;

            case 'Add':

                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, thirdElement);
                }
                else {
                    console.log('Invalid placement!');
                }
                break;

            case 'Strike':

                if (index - thirdElement >= 0 && index + thirdElement < targets.length) {
                    let indexToStart = index - thirdElement;
                    let countToDelete = (thirdElement * 2) + 1;
                    targets.splice(indexToStart, countToDelete);
                }
                else {
                    console.log('Strike missed!');
                }
                break;
        }

        i++;
        command = array[i];
    }
    console.log(targets.join('|'));
}
solve((["1 2 3 4 5",

    "Strike 0 1",

    "End"]))