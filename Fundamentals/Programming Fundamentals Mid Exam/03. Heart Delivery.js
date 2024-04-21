function solve(array) {

    let neighborhood = array.shift().split('@').map(Number);
    let i = 0;
    let command = array[i];
    let currentPosition = 0;

    while (command !== 'Love!') {

        let splittedCommand = command.split(' ');
        let jumpLength = Number(splittedCommand[1]);

        if (currentPosition + jumpLength < neighborhood.length) {

            if (neighborhood[currentPosition + jumpLength] === 0) {
                console.log(`Place ${currentPosition + jumpLength} already had Valentine's day.`);
                currentPosition += jumpLength;
            }
            else {
                neighborhood[currentPosition + jumpLength] -= 2;

                if (neighborhood[currentPosition + jumpLength] === 0) {
                    console.log(`Place ${currentPosition + jumpLength} has Valentine's day.`);
                }
                currentPosition += jumpLength;
            }
        }

        else {
            currentPosition = 0;
            if (neighborhood[currentPosition] === 0) {
                console.log(`Place ${currentPosition} already had Valentine's day.`);
            }
            else {
                neighborhood[currentPosition] -= 2;

                if (neighborhood[currentPosition] === 0) {
                    console.log(`Place ${currentPosition} has Valentine's day.`);
                }
            }
        }
        i++;
        command = array[i];
    }
    let zeroPositions = neighborhood.filter(x => x === 0);
    console.log(`Cupid's last position was ${currentPosition}.`);

    if (zeroPositions.length === neighborhood.length) {
        console.log('Mission was successful.');
    }
    else {
        housesLeft = neighborhood.length - zeroPositions.length;
        console.log(`Cupid has failed ${housesLeft} places.`);
    }
}
solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])