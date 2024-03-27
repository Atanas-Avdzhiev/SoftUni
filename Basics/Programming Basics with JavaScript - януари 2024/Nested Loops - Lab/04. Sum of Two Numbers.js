function solve(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCount = 0;

    for (let x = firstNumber; x <= lastNumber; x++) {

        for (let y = firstNumber; y <= lastNumber; y++) {

            combinationCount++;

            if (x + y === magicNumber) {

                let sum = x + y;
                console.log(`Combination N:${combinationCount} (${x} + ${y} = ${sum})`);
                return;

            };

        };

    };

    console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);

};
solve(["88", "888", "2000"]);