function solve(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let price = 0;
    let numberOfNights = days - 1;

    if (roomType === "room for one person") {
        price = numberOfNights * 18;
    }
    else if (roomType === "apartment") {
        price = numberOfNights * 25;
    }
    else {
        price = numberOfNights * 35;
    };

    if (days < 10) {
        switch (roomType) {
            case "apartment": price *= 0.7; break;
            case "president apartment": price *= 0.9; break;
        };
    }
    else if (days >= 10 && days <= 15) {
        switch (roomType) {
            case "apartment": price *= 0.65; break;
            case "president apartment": price *= 0.85; break;
        };
    }
    else {
        switch (roomType) {
            case "apartment": price *= 0.5; break;
            case "president apartment": price *= 0.8; break;
        };
    };

    if (rating === "positive") {
        price *= 1.25;
    }
    else {
        price *= 0.9;
    };

    console.log(`${price.toFixed(2)}`);

};
solve(["30",
    "president apartment",
    "negative"]);