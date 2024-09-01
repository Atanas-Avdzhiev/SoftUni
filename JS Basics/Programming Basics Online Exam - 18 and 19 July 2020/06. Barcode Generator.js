function solve(input) {

    let firstNumber = input[0];
    let lastNumber = input[1];

    let firstNumber1 = Number(firstNumber[0]);
    let firstNumber2 = Number(firstNumber[1]);
    let firstNumber3 = Number(firstNumber[2]);
    let firstNumber4 = Number(firstNumber[3]);

    let lastNumber1 = Number(lastNumber[0]);
    let lastNumber2 = Number(lastNumber[1]);
    let lastNumber3 = Number(lastNumber[2]);
    let lastNumber4 = Number(lastNumber[3]);

    let isLegitNumber = "";

    for (let i = firstNumber1; i <= lastNumber1; i++) { // 2 до 6

        if (i % 2 !== 0) {

            for (let j = firstNumber2; j <= lastNumber2; j++) { // 3 до 7

                if (j % 2 !== 0) {

                    for (let k = firstNumber3; k <= lastNumber3; k++) { // 4 до 8

                        if (k % 2 !== 0) {

                            for (let m = firstNumber4; m <= lastNumber4; m++) { // 5 до 9

                                if (m % 2 !== 0) {
                                    let currentNumber = "";
                                    currentNumber += i.toString();
                                    currentNumber += j.toString();
                                    currentNumber += k.toString();
                                    currentNumber += m.toString();
                                    isLegitNumber += currentNumber + " ";
                                }

                            }

                        }

                    }
                }

            }
        }
    };

    console.log(isLegitNumber.trim());

};
solve(["2345",
    "6789"]);