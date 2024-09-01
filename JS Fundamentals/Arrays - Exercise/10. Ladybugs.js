function solve(input) {

    let fieldSize = input[0];
    let ladybugIndexes = input[1];
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        field[i] = 0;
    }

    for (let i = 0; i < ladybugIndexes.length; i += 2) {
        if (ladybugIndexes[i] !== ' ') {
            if (Number(ladybugIndexes[i]) < fieldSize) {
                let currentIndex = Number(ladybugIndexes[i])
                field[currentIndex] = 1;
            }
        }
    }

    for (let i = 2; i < input.length; i++) {
        let currentStep = input[i];

        let ladybugIndex = 0;
        let direction = '';
        let flyLength = 0;

        let ladybugIndexString = '';
        let flyLengthString = '';

        for (let j = 0; j < currentStep.length; j++) {
            while (currentStep[j] !== ' ') {
                ladybugIndexString += currentStep[j];
                j++;
            }
            ladybugIndex = Number(ladybugIndexString);
            j++;
            while (currentStep[j] !== ' ') {
                direction += currentStep[j];
                j++;
            }
            j++;
            while (j < currentStep.length) {
                flyLengthString += currentStep[j];
                j++;
            }
            flyLength = Number(flyLengthString);
        }

        if (field[ladybugIndex] === 1 && (ladybugIndex >= 0 && ladybugIndex < fieldSize)) {

            if (direction === 'right') {
                let step = ladybugIndex;
                while (field[step] === 1 && step >= 0 && step < field.length) {
                    step += flyLength;
                }
                if (step >= 0 && step < field.length) {
                    field[step] = 1;
                }
            }

            if (direction === 'left') {
                let step = ladybugIndex;
                while (field[step] === 1 && step >= 0 && step < field.length) {
                    step -= flyLength;
                }
                if (step >= 0 && step < field.length) {
                    field[step] = 1;
                }
            }

            field[ladybugIndex] = 0;
        }

    }
    console.log(field.join(' '));
}
solve([3, '0 1', '0 right 1', '2 right 1'])