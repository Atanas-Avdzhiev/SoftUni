function solve(array) {

    let resultArray = array.shift().split(' ').map(Number);
    let i = 0;
    let command = array[i];

    while (command !== 'end') {

        let splittedCommand = command.split(' ');
        let firstCommand = splittedCommand[0];
        let firstIndex = Number(splittedCommand[1]);
        let secondIndex = Number(splittedCommand[2]);

        switch (firstCommand) {
            case 'swap':
                let firstNumber = resultArray[firstIndex];
                let secondNumber = resultArray[secondIndex];
                resultArray[firstIndex] = secondNumber;
                resultArray[secondIndex] = firstNumber;
                break;

            case 'multiply':
                let multipliedNumber = resultArray[firstIndex] * resultArray[secondIndex];
                resultArray[firstIndex] = multipliedNumber;
                break;

            case 'decrease':
                resultArray = resultArray.map(x => x - 1);
                break;
        }

        i++;
        command = array[i];
    }
    console.log(resultArray.join(', '));
}
solve(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])