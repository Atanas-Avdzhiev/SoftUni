function solve(numbers, order) {

    if (order === 'asc') {
        numbers = numbers.sort((a, b) => a - b);
        return numbers;
    }
    else {
        numbers = numbers.sort((a, b) => b - a);
        return numbers;
    }
}
solve([14, 7, 17, 6, 8], 'asc')