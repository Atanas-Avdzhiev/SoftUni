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

    if (firstNumber === first) {
        if (second >= third) {
            console.log(second)
            console.log(third)
        }
        else {
            console.log(third)
            console.log(second)
        }
    }

    if (firstNumber === second) {
        if (first >= third) {
            console.log(first)
            console.log(third)
        }
        else {
            console.log(third)
            console.log(first)
        }
    }

    if (firstNumber === third) {
        if (first >= second) {
            console.log(first)
            console.log(second)
        }
        else {
            console.log(second)
            console.log(third)
        }
    }
}
solve(2, 1, 3)