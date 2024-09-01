function solve(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let numbersAsString = "";

    for (let currentNumber = firstNumber; currentNumber <= lastNumber; currentNumber++) {

        let oddPositions = 0;
        let evenPositions = 0;
        let currentNumberAsString = currentNumber.toString();

        for (let currentIndex = 0; currentIndex < currentNumberAsString.length; currentIndex++) {

            if (currentIndex % 2 === 0) {

                evenPositions += Number(currentNumberAsString[currentIndex]);
            }
            else {
                oddPositions += Number(currentNumberAsString[currentIndex]);
            };

        };

        if (oddPositions === evenPositions) {

            numbersAsString += currentNumberAsString + " ";

        };

    };

    console.log(numbersAsString);

};
solve(["123456", "124000"]);