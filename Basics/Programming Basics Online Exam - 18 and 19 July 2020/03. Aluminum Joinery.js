function solve(input) {

    let numberOfJoinery = Number(input[0]);
    let typeOfJoinery = input[1];
    let wayOfReceiving = input[2];

    let price = 0;

    switch (typeOfJoinery) {
        case "90X130": price = 110 * numberOfJoinery;

            if (numberOfJoinery > 60) {
                price *= 0.92;
            }
            else if (numberOfJoinery > 30) {
                price *= 0.95;
            };
            break;

        case "100X150": price = 140 * numberOfJoinery;

            if (numberOfJoinery > 80) {
                price *= 0.9;
            }
            else if (numberOfJoinery > 40) {
                price *= 0.94;
            };
            break;

        case "130X180": price = 190 * numberOfJoinery;

            if (numberOfJoinery > 50) {
                price *= 0.88;
            }
            else if (numberOfJoinery > 20) {
                price *= 0.93;
            };
            break;

        case "200X300": price = 250 * numberOfJoinery;

            if (numberOfJoinery > 50) {
                price *= 0.86;
            }
            else if (numberOfJoinery > 25) {
                price *= 0.91;
            };
            break;
    };

    if (wayOfReceiving === "With delivery") {
        price += 60;
    };

    if (numberOfJoinery > 99) {
        price *= 0.96;
    };

    if (numberOfJoinery < 10) {
        console.log("Invalid order");
        return;
    };

    console.log(`${price.toFixed(2)} BGN`);

};
solve(["105",
    "100X150",
    "With delivery"]);