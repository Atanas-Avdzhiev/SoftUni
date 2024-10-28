function solve(first, second, third) {

    let largestNumber = 0;
    if (first > second && first > third) {
        largestNumber = first;
    }
    else if (second > third && second > first) {
        largestNumber = second;
    }
    else {
        largestNumber = third;
    }
    console.log(`The largest number is ${largestNumber}.`);
}
solve(5, -3, 16)