function solve(input) {

    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    let typeService = "";
    let typeService2 = "";
    let moneyEarned = 0;

    while (command !== "closed") {

        typeService = input[index];
        index++;
        typeService2 = input[index];

        if (typeService === "haircut") {

            switch (typeService2) {
                case "mens": moneyEarned += 15; break;
                case "ladies": moneyEarned += 20; break;
                case "kids": moneyEarned += 10; break;
            }
        }
        else if (typeService === "color") {

            switch (typeService2) {
                case "touch up": moneyEarned += 20; break;
                case "full color": moneyEarned += 30; break;
            };
        };
        index++;
        command = input[index];

        if (moneyEarned >= target) {
            break;
        };

    };

    if (moneyEarned >= target) {
        console.log(`You have reached your target for the day!`);
    }
    else {
        let moneyNeeded = target - moneyEarned;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
    }

    console.log(`Earned money: ${moneyEarned}lv.`);

};
solve(["50",
    "color",
    "full color",
    "haircut",
    "ladies"]);