function solve(input) {

    let bestPlayer = input[0];
    let mostGoals = Number(input[1]);
    let index = 0;
    let command = input[index];

    while (command !== "END") {

        index++;

        let goals = Number(input[index]);

        if (goals > mostGoals) {
            bestPlayer = input[index - 1];
            mostGoals = goals;
        };

        if (mostGoals >= 10) {
            break;
        };

        index++;
        command = input[index];

    };

    console.log(`${bestPlayer} is the best player!`);

    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${mostGoals} goals.`);
    };

};
solve(["Silva",
"5",
"Harry Kane",
"10"]);