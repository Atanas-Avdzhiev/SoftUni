function solve(input) {

    let numberOfExaminers = Number(input[0]);
    let sumOfAllRatings = 0;
    let numberOfAllRatings = 0;
    let index = 1;
    let command = input[index];

    while (command !== "Finish") {

        let presentationName = input[index];
        index++;
        let sumOfRatingsForTheCurrentPresentation = 0;

        for (let currentRating = 1; currentRating <= numberOfExaminers; currentRating++) {

            numberOfAllRatings++;
            sumOfAllRatings += Number(input[index]);
            sumOfRatingsForTheCurrentPresentation += Number(input[index]);
            index++;

        };

        console.log(`${presentationName} - ${(sumOfRatingsForTheCurrentPresentation / numberOfExaminers).toFixed(2)}.`);

        command = input[index];

    };

    let avgRating = sumOfAllRatings / numberOfAllRatings;

    console.log(`Student's final assessment is ${avgRating.toFixed(2)}.`);

};
solve(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"]);