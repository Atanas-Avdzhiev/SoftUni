function solve(array) {

    let currentConsequence = 0;
    let biggestConsequence = 0;
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            if (array[i] === array[i + 1]) {
                currentConsequence += 1;

                if (currentConsequence > biggestConsequence) {
                    biggestConsequence = currentConsequence;
                    number = array[i];
                }
            }
            else {
                currentConsequence = 0;
            }
        }
    }
    let string = '';
    for (let i = 1; i <= biggestConsequence + 1; i++) {
        string += number + ' ';
    }
    console.log(string)
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])