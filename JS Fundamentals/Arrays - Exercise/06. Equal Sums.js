function solve(array) {

    let leftSum = 0;
    let rightSum = 0;
    let equalSum = false;

    for (let i = 0; i < array.length; i++) {
        rightSum = 0;
        for (let j = i + 1; j < array.length; j++) {
            rightSum += Number(array[j]);
        }
        if (leftSum === rightSum) {
            console.log(i);
            equalSum = true;
            break;
        }
        leftSum += array[i];
    }
    if (equalSum === false) {
        console.log('no');
    }
}
solve([1, 2, 3])