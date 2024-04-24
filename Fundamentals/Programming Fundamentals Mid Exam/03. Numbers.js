function solve(numbers) {

    let array = numbers.split(' ').map(Number);
    let sum = 0;
    array.forEach(x => sum += x);
    let averageValue = sum / array.length;
    array.sort((a, b) => b - a);
    let filteredArray = array.filter(x => x > averageValue);

    if (filteredArray.length <= 5 && filteredArray.length > 0) {
        console.log(filteredArray.join(' '));
    }
    else {
        if (filteredArray.length > 0) {
            let slicedArray = filteredArray.slice(0, 5);
            console.log(slicedArray.join(' '));
        }
    }
    if (filteredArray.length === 0) {
        console.log('No');
    }
}
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')