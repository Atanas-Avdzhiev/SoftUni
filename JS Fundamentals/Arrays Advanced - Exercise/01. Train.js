function train(array) {

    let train = array.slice(0, 1);
    let trainAsNumbers = train[0].split(' ').map(Number);
    array.shift();
    let maxPassengers = Number(array[0]);
    array.shift();

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' ');

        if (currentCommand[0] === 'Add') {
            let numberOfPassengers = Number(currentCommand[1]);
            trainAsNumbers.push(numberOfPassengers);
        }
        else {
            let passengersToFit = Number(currentCommand[0]);

            for (let i = 0; i < trainAsNumbers.length; i++) {
                let currentPassengersInWagon = trainAsNumbers[i];
                if (passengersToFit + currentPassengersInWagon <= maxPassengers) {
                    currentPassengersInWagon += passengersToFit;
                    trainAsNumbers[i] = currentPassengersInWagon;
                    break;
                }
            }
        }

    }
    console.log(trainAsNumbers.join(' '));
}
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])