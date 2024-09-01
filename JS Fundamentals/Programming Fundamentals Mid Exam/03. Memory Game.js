function solve(array) {

    let elements = array.shift().split(' ');
    let i = 0;
    let commandIndexes = array[i];
    let currentMove = 0;

    while (commandIndexes !== 'end') {
        currentMove++;
        let currentCommand = array[i].split(' ').map(Number);
        let firstIndex = currentCommand[0];
        let secondIndex = currentCommand[1];

        if (firstIndex === secondIndex || (firstIndex < 0 || firstIndex >= elements.length) || (secondIndex < 0 || secondIndex >= elements.length)) {
            let firstIndexToAdd2Elements = Math.floor((elements.length) / 2);
            elements.splice(firstIndexToAdd2Elements, 0, `-${currentMove}a`, `-${currentMove}a`);
            console.log('Invalid input! Adding additional elements to the board');
        }
        else if (elements[firstIndex] === elements[secondIndex]) {
            let elementToRemove = elements[firstIndex];
            let firstElementToRemove = Math.min(firstIndex, secondIndex);
            let secondElementToRemove = Math.max(firstIndex, secondIndex);
            elements.splice(firstElementToRemove, 1);
            elements.splice(secondElementToRemove - 1, 1);
            console.log(`Congrats! You have found matching elements - ${elementToRemove}!`);
        }
        else if (elements[firstIndex] !== elements[secondIndex]) {
            console.log('Try again!');
        }

        if (elements.length === 0) {
            console.log(`You have won in ${currentMove} turns!`);
            return;
        }

        i++;
        commandIndexes = array[i];
    }
    console.log('Sorry you lose :(');
    console.log(`${elements.join(' ')}`);
}
solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"])