function solve(input) {

    let numberOfVisitors = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let index = 1; index < input.length; index++) {

        let command = input[index];

        if (command === "Back") {
            back += 1;
        };

        if (command === "Chest") {
            chest += 1;
        };

        if (command === "Legs") {
            legs += 1;
        };

        if (command === "Abs") {
            abs += 1;
        };

        if (command === "Protein shake") {
            proteinShake += 1;
        };

        if (command === "Protein bar") {
            proteinBar += 1;
        };
    };

    let workOut = back + chest + legs + abs;
    let protein = proteinShake + proteinBar;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(workOut / numberOfVisitors * 100).toFixed(2)}% - work out`);
    console.log(`${(protein / numberOfVisitors * 100).toFixed(2)}% - protein`);

};
solve(["7",

    "Chest",

    "Back",

    "Legs",

    "Legs",

    "Abs",

    "Protein shake",

    "Protein bar"]);