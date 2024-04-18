function solve(array) {

    let newArray = array[0].split(' ');
    let numberArray = newArray.map(x => Number(x));

    for (let i = 1; i < array.length; i++) {
        let currentArray = array[i].split(' ');
        let currentCommand = currentArray[0];
        let currentFirstNumber = Number(currentArray[1]);

        switch (currentCommand) {
            case 'Add': numberArray.push(Number(currentArray[1]));
                break;
            case 'Remove': let removedNumber = numberArray.filter(x => x !== currentFirstNumber);
                numberArray = removedNumber;
                break;
            case 'RemoveAt': let removedFromIndex = numberArray.filter((x, i) => i !== currentFirstNumber);
                numberArray = removedFromIndex;
                break;
            case 'Insert':
                let currentIndexToAdd = Number(currentArray[2]);
                numberArray.splice(currentIndexToAdd, 0, currentFirstNumber);
                break;
        }
    }
    console.log(numberArray.join(' '));
}
solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])