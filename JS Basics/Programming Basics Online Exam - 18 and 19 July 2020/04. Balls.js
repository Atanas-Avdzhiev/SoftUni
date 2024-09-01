function solve(input) {

    let numberOfBalls = Number(input[0]);
    let points = 0;
    let numberOfDifferentBalls = 0;
    let numberOfTimesDividedBy2 = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;

    for (let index = 1; index <= numberOfBalls; index++) {

        let currentBall = input[index];

        if (currentBall === "red") {
            points += 5;
            redBalls++;
        }
        else if (currentBall === "orange") {
            points += 10;
            orangeBalls++;
        }
        else if (currentBall === "yellow") {
            points += 15;
            yellowBalls++;
        }
        else if (currentBall === "white") {
            points += 20;
            whiteBalls++;
        }
        else if (currentBall === "black") {
            points = Math.floor(points / 2);
            numberOfTimesDividedBy2++;
        }
        else {
            numberOfDifferentBalls++;
        };
    };

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${numberOfDifferentBalls}`);
    console.log(`Divides from black balls: ${numberOfTimesDividedBy2}`);

};
solve(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange", "red", "black", "black", "black", "black"]);