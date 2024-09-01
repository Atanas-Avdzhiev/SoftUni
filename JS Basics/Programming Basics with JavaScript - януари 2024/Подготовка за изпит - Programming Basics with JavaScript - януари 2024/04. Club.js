function solve(input) {

    let targetProfit = Number(input[0]);
    let index = 1;
    let command = input[index];
    let totalPrice = 0;

    while (command !== "Party!") {

        let cocktailName = input[index];
        let cocktailLength = cocktailName.length;
        index++;
        let cocktailNumber = Number(input[index]);
        let price = cocktailLength * cocktailNumber;

        if ((price % 2) !== 0) {
            price *= 0.75;
        };
        totalPrice += price;
        index++;
        command = input[index];

        if (totalPrice >= targetProfit) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
            return;
        };
    };

    let moneyNeeded = targetProfit - totalPrice;

    console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);

};
solve(["100",

    "Sidecar",

    "7",

    "Mojito",

    "5",

    "White Russian",

    "10"]);