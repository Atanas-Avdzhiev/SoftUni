function solve(first, second) {
    let index = 0;
    let sum = 0;
    let identical = true;
    for (let i = 0; i < first.length; i++) {
        sum += Number(first[i]);
        if (first[i] !== second[i]) {
            index = i;
            identical = false;
            console.log(`Arrays are not identical. Found difference at ${index} index`)
            break;
        }
    }
    if (identical) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
solve(['10', '20', '30'], ['10', '20', '30'])