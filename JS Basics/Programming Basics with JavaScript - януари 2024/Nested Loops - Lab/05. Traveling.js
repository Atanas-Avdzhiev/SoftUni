function traveling(input) {

    let index = 0;
    let command = input[index];
    index++;
    let destination = "";

    while (command !== "End") {

        destination = command;
        let neededMoney = Number(input[index]);
        let savings = 0;
        index++;

        while (savings < neededMoney) {
            savings += Number(input[index]);
            index++;

            if (savings >= neededMoney) {
                console.log(`Going to ${destination}!`);
            };

        };

        command = input[index];
        index++;
    };

};
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);