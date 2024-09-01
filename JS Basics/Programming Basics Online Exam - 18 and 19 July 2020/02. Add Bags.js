function solve(input) {

    let priceOfBaggageMoreThan20kg = Number(input[0]);
    let weightOfBaggageInKgs = Number(input[1]);
    let daysUntilTraveling = Number(input[2]);
    let numberOfBaggages = Number(input[3]);

    let priceForBaggage = 0;

    if (weightOfBaggageInKgs < 10) {
        priceForBaggage = priceOfBaggageMoreThan20kg * 0.2;
    }
    else if (weightOfBaggageInKgs >= 10 && weightOfBaggageInKgs <= 20) {
        priceForBaggage = priceOfBaggageMoreThan20kg * 0.5;
    }
    else {
        priceForBaggage = priceOfBaggageMoreThan20kg;
    };

    if (daysUntilTraveling > 30) {
        priceForBaggage *= 1.1;
    }
    else if (daysUntilTraveling >= 7 && daysUntilTraveling <= 30) {
        priceForBaggage *= 1.15;
    }
    else {
        priceForBaggage *= 1.4;
    };

    let totalPrice = priceForBaggage * numberOfBaggages;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

};
solve(["30",
    "18",
    "15",
    "2"]);