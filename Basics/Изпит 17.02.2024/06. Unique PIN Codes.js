function solve(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let i = 1; i <= first; i++) {

        if (i % 2 === 0) {

            for (let j = 1; j <= second; j++) {

                if (j === 2 || j === 3 || j === 5 || j === 7) {

                    for (let k = 1; k <= third; k++) {

                        if (k % 2 === 0) {

                            console.log(`${i} ${j} ${k}`);

                        };

                    };

                };

            };

        };

    };

};
solve(["8",
    "2",
    "8"]);