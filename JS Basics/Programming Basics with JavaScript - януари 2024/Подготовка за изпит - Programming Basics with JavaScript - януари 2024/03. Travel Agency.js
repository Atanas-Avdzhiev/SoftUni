function solve(input) {

    let city = input[0];
    let equipment = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;

    if (city === "Borovets" || city === "Bansko") {

        if (equipment === "withEquipment") {
            price = 100;

            if (vip === "yes") {
                price *= 0.9;
            };

        };

        if (equipment === "noEquipment") {
            price = 80;

            if (vip === "yes") {
                price *= 0.95;
            };

        };

    };

    if (city === "Varna" || city === "Burgas") {

        if (equipment === "withBreakfast") {
            price = 130;

            if (vip === "yes") {
                price *= 0.88;
            };

        };

        if (equipment === "noBreakfast") {
            price = 100;

            if (vip === "yes") {
                price *= 0.93;
            };

        };

    };

    let totalPrice = days * price;

    if (days > 7) {
        totalPrice -= price;
    };

    if (days <= 0) {
        console.log(`Days must be positive number!`);
        return;
    };

    if (city !== "Borovets" && city !== "Bansko" && city !== "Varna" && city !== "Burgas") {
        console.log(`Invalid input!`);
        return;
    };

    if (equipment !== "noEquipment" && equipment !== "withEquipment" && equipment !== "noBreakfast" && equipment !== "withBreakfast") {
        console.log(`Invalid input!`);
        return;
    };

    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);

};
solve(["Gabrovo",

    "noBreakfast",

    "no",

    "3"]);