function solve(input) {

    let primeNumbers = 0;
    let nonPrimeNumbers = 0;
    let index = 0;
    let command = input[index];

    while (command !== "stop") {

        let currentNumber = Number(input[index]);
        let primeOrNot = true;

        if (currentNumber < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        };

        for (let divisor = 2; divisor < currentNumber; divisor++) {

            if ((currentNumber % divisor) === 0) {
                primeOrNot = false;
                break;
            };

        };

        if (primeOrNot === true) {
            primeNumbers += currentNumber;
        }
        else {
            nonPrimeNumbers += currentNumber;
        }

        index++;
        command = input[index];
    };

    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);

};
solve(["30",

"83",

"33",

"-1",

"20",

"stop"]);