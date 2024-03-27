function solve(input) {

    let numberOfPeople = Number(input[0]);
    let tax = Number(input[1]);
    let pricePerLounger = Number(input[2]);
    let pricePerUmbrella = Number(input[3]);

    let totalTax = numberOfPeople * tax;
    let loungerPrice = pricePerLounger * Math.ceil(numberOfPeople * 0.75);
    let umbrellaPrice = pricePerUmbrella * Math.ceil(numberOfPeople * 0.5);

    let totalPrice = totalTax + loungerPrice + umbrellaPrice;

    console.log(`${totalPrice.toFixed(2)} lv.`);

};
solve(["50",

    "6",

    "8",

    "4"]);