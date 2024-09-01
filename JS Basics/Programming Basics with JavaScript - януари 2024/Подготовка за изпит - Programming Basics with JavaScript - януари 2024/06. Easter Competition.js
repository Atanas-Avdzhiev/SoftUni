function solve(input) {

    let numberOfEasterBreads = Number(input[0]);
    let currentEasterBread = 1;
    let index = 1;
    let pointsForCurrentBestEasterBread = 0;
    let bestChef = input[1];

    while (currentEasterBread <= numberOfEasterBreads) {

        let chefName = input[index];
        index++;
        let command = input[index];
        let pointsForCurrentEasterBread = 0;

        while (command !== "Stop") {

            pointsForCurrentEasterBread += Number(input[index]);
            index++;
            command = input[index];
        };

        console.log(`${chefName} has ${pointsForCurrentEasterBread} points.`);

        if (pointsForCurrentEasterBread > pointsForCurrentBestEasterBread) {
            pointsForCurrentBestEasterBread = pointsForCurrentEasterBread;
            bestChef = chefName;
            console.log(`${chefName} is the new number 1!`);
        };
        index++;
        currentEasterBread++;
    };

    console.log(`${bestChef} won competition with ${pointsForCurrentBestEasterBread} points!`);

};
solve(["2",

    "Chef Angelov",

    "9",

    "9",

    "9",

    "Stop",

    "Chef Rowe",

    "10",

    "10",

    "10",

    "10",

    "Stop"]);