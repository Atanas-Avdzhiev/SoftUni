function solve(array) {

    let resultObject = [];

    for (const command of array) {
        let [direction, number] = command.split(', ');
        if (direction === 'IN') {
            if (!resultObject.includes(number)) {
                resultObject.push(number);
            }
        }
        else if (direction === 'OUT') {
            if (resultObject.includes(number)) {
                resultObject.splice(resultObject.indexOf(number), 1);
            }
        }
    }
    resultObject.sort((a, b) => a.localeCompare(b));

    if (resultObject.length === 0) {
        console.log('Parking Lot is Empty');
    }
    else {
        for (const number of resultObject) {
            console.log(number);
        }
    }
}
solve(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])