function solve(input) {

    let number = Number(input[0]);
    let sumOfAllStrings = "";

    for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {

        let isSpecial = true;

        for (let index = 0; index <= 3; index++) {



            if ((number % currentNumber.toString()[index]) !== 0) {
                isSpecial = false;
                break;
            };


        };

        if (isSpecial === true) {
            sumOfAllStrings += currentNumber + " ";
        };

    };

    console.log(sumOfAllStrings);

};
solve(["16"]);