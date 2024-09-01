function solve(array) {

    let targets = array.shift().split(' ').map(Number);
    let i = 0;
    let command = array[i];

    while (command !== 'End') {

        let indexToShot = Number(array[i]);

        if (indexToShot >= 0 && indexToShot < targets.length && targets[indexToShot] !== -1) {
            let currentNumber = targets[indexToShot];
            targets[indexToShot] = -1;

            for (let j = 0; j < targets.length; j++) {

                if (targets[j] > currentNumber && targets[j] !== -1) {
                    targets[j] -= currentNumber;
                }
                else {

                    if (targets[j] <= currentNumber && targets[j] !== -1) {
                        targets[j] += currentNumber;
                    }
                }
            }
        }
        i++;
        command = array[i];
    }
    let shotTargets = targets.filter(x => x === -1);
    console.log(`Shot targets: ${shotTargets.length} -> ${targets.join(' ')}`);
}
solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])