function vacation(input) {
    let moneyNeededForVacation = Number(input[0]);
    let startupMoney = Number(input[1]);
    index = 2;
    let spendOrSave = input[index];
    let consecutiveSpendings = 0;
    let daysPassed = 0;

    while (index < input.length - 1) {

        if (spendOrSave === "spend") {

            startupMoney -= Number(input[index + 1]);
            consecutiveSpendings += 1;
            daysPassed += 1;

            if (startupMoney < 0) {
                startupMoney = 0;
            };
        }
        else {
            startupMoney += Number(input[index + 1]);
            consecutiveSpendings = 0;
            daysPassed += 1;
        };

        if(consecutiveSpendings === 5){
            console.log("You can't save the money.");
            console.log(`${daysPassed}`);
            return;
        };

        // if(startupMoney >= moneyNeededForVacation){
        //     console.log(`You saved the money for ${daysPassed} days.`)
        // };

        index += 2;
        spendOrSave = input[index];
    };
    
    if(startupMoney >= moneyNeededForVacation){
        console.log(`You saved the money for ${daysPassed} days.`)
    };

};
vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"]);