function solve(...inputs) {

    firstResult = [];
    secondResult = {};

    for (const input of inputs) {
        currentType = typeof input;
        currentValue = input;
        let obj = [];
        obj[0] = currentType;
        obj[1] = currentValue;
        firstResult.push(obj);
        if (!secondResult.hasOwnProperty(currentType)) {
            secondResult[currentType] = 0;
        }
        secondResult[currentType]++;
    }

    secondResultEntries = Object.entries(secondResult);
    sortedSecondResult = secondResultEntries.sort((a, b) => b[1] - a[1]);

    for (const result of firstResult) {
        console.log(`${result[0]}: ${result[1]}`);
    }

    for (const result of sortedSecondResult) {
        console.log(`${result[0]} = ${result[1]}`);
    }
}
solve({ name: 'bob' }, 3.333, 9.999);