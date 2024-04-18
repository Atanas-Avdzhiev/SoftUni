function solve(array, modificators) {

    let firstNumber = modificators[0];
    let secondNumber = modificators[1];
    let thirdNumber = modificators[2];

    let newArray = array.slice(0, firstNumber);
    newArray.splice(0, secondNumber);

    let timesIncluding = 0;

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === thirdNumber) {
            timesIncluding++;
        }
    }
    console.log(`Number ${thirdNumber} occurs ${timesIncluding} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3])