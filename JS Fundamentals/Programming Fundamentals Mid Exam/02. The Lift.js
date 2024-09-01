function solve(array) {

    let waitingPeople = Number(array.shift());
    let lift = array[0].split(' ').map(Number);

    let i = 0;
    let currentWagon = lift[i];
    let isFull = false;

    while (isFull === false) {

        if (currentWagon < 4) {
            let freeSpace = 4 - currentWagon;

            if (waitingPeople >= freeSpace) {
                lift[i] = 4;
                waitingPeople -= freeSpace;
            }
            else {
                lift[i] += waitingPeople;
                waitingPeople = 0;
            }
        }
        if (lift.every(x => x === 4)) {
            isFull = true;
        }
        if (waitingPeople <= 0) {
            break;
        }
        i++;
        currentWagon = lift[i];
    }

    if (waitingPeople <= 0 && isFull === false) {
        console.log('The lift has empty spots!');
        console.log(`${lift.join(' ')}`);
    }
    else if (waitingPeople > 0 && isFull === true) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(`${lift.join(' ')}`);
    }
    else {
        console.log(lift.join(' '));
    }
}
solve(["15", "0 0 0 0 0"])