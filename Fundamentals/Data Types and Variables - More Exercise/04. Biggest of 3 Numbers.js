function solve(first, second, third) {

    let firstNumber = first;

    if (first > second && first > third) {
        firstNumber = first;
    }
    else if (second > first && second > third) {
        firstNumber = second;
    }
    else if (third > first && third > second) {
        firstNumber = third;
    }

    console.log(firstNumber)
}
solve(1, 2, 3)