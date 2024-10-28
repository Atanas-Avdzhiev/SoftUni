function solve(array) {

    let smallestNumber = array[0];

    for (let i = 0; i < array.length; i++) {
        if (smallestNumber > array[i]) {
            smallestNumber = array[i];
        }
    }
    let removedNumber = array.indexOf(smallestNumber);
    array.splice(removedNumber, 1);

    let secondSmallestNumber = array[0];

    for (let i = 0; i < array.length; i++) {
        if (secondSmallestNumber > array[i]) {
            secondSmallestNumber = array[i];
        }
    }
    console.log(smallestNumber, secondSmallestNumber);
}
solve([30, 15, 50, 5])