function solve(input) {

    let budget = Number(input[0]);
    let litres = Number(input[1]);
    let day = input[2];

    let price = litres * 2.1;
    price += 100;

    if (day === "Saturday") {
        price *= 0.9;
    }
    else if (day === "Sunday") {
        price *= 0.8;
    };

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    }
    else {
        let moneyNeeded = price - budget;
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }

};
solve(["120",

"30",

"Saturday"]);