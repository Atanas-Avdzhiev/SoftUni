function solve(input) {

    let pocketMoneyPerDay = Number(input[0]);
    let moneyWonPerDay = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let moneySavedFromPocketMoney = pocketMoneyPerDay * 5;
    let moneyWon = moneyWonPerDay * 5;
    let totalMoneyWon = moneySavedFromPocketMoney + moneyWon;
    let totalMoneyWonWithExpenses = totalMoneyWon - expenses;

    if (totalMoneyWonWithExpenses >= giftPrice) {
        console.log(`Profit: ${totalMoneyWonWithExpenses.toFixed(2)} BGN, the gift has been purchased.`);
    }
    else {
        let moneyNeeded = giftPrice - totalMoneyWonWithExpenses;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    };

};
solve(["15.20",
    "200.00",
    "7.30",
    "1500.12"]);