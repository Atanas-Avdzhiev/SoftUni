function solve(input) {

    const numberOfCities = Number(input.shift());
    let totalIncome = 0;

    for (let i = 1; i <= numberOfCities; i++) {

        const nameOfCity = input.shift();
        let moneyEarned = Number(input.shift());
        let expenses = Number(input.shift());

        if (i % 3 === 0 && i % 5 !== 0) {
            expenses *= 1.5;
        }
        if (i % 5 === 0) {
            moneyEarned *= 0.9;
        }
        let profit = moneyEarned - expenses;
        console.log(`In ${nameOfCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        totalIncome += profit;
    }
    console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`);
}
solve(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])