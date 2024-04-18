function sort(array) {
    let originalArray = array.slice();
    array.sort((a, b) => a - b);
    let ascendingArray = array.slice();
    array.sort((a, b) => b - a);
    let descendingArray = array.slice();
    let resultArray = [];

    for (let i = 0; i < (descendingArray.length / 2); i++) {
        if (i < ((descendingArray.length / 2)- 0.5)) {
            resultArray.push(descendingArray[i]);
            resultArray.push(ascendingArray[i]);
        }
        else {
            resultArray.push(descendingArray[i]);
        }
    }
    console.log(resultArray.join(' '));
}
sort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]) // 690 2 47 6 45 7 34 19 32 32