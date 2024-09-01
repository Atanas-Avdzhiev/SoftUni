function solve(input) {

    let numberOfTournamentDays = Number(input[0]);
    let index = 1;
    let command = input[index];
    let totalMoneyWon = 0;
    let totalGamesWon = 0;
    let totalGamesLost = 0;

    for (let numberOfDays = 1; numberOfDays <= numberOfTournamentDays; numberOfDays++) {

        let gamesWonPerDay = 0;
        let gamesLostPerDay = 0;
        let moneyWonForTheDay = 0;

        while (command !== "Finish") {

            let game = input[index];
            index++;
            let result = input[index];

            if (result === "win") {
                moneyWonForTheDay += 20;
                totalGamesWon++;
                gamesWonPerDay++;
            };

            if (result === "lose") {
                totalGamesLost++;
                gamesLostPerDay++;
            };

            index++;
            command = input[index];

        };

        if (gamesWonPerDay > gamesLostPerDay) {
            moneyWonForTheDay *= 1.1;
        };
        totalMoneyWon += moneyWonForTheDay;
        index++;
        command = input[index];
    };

    if (totalGamesWon > totalGamesLost) {
        totalMoneyWon *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoneyWon.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyWon.toFixed(2)}`);
    };
};
solve(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);