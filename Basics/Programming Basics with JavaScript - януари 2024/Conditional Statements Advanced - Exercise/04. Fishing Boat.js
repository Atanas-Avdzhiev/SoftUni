function fishingBoat(input){
let budget = Number (input[0]);
let season = input[1];
let numberFishermans = Number (input[2]);

if(numberFishermans <= 6){
    switch(season){
        case "Spring": price = 3000 * 0.9;break
        case "Summer":
        case "Autumn": price = 4200 * 0.9;break
        case "Winter": price = 2600 * 0.9;break
    };
};


if(numberFishermans >= 7 && numberFishermans <= 11){
    switch(season){
        case "Spring": price = 3000 * 0.85;break
        case "Summer":
        case "Autumn": price = 4200 * 0.85;break
        case "Winter": price = 2600 * 0.85;break
    };
};


if(numberFishermans >= 12){
    switch(season){
        case "Spring": price = 3000 * 0.75;break
        case "Summer":
        case "Autumn": price = 4200 * 0.75;break
        case "Winter": price = 2600 * 0.75;break
    };
};

if(numberFishermans % 2 === 0 ){
    if(season !== "Autumn"){
        price *= 0.95;
    };
};

if(budget >= price){
    let moneyLeft = budget - price;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
};

if(budget < price){
    let moneyNeeded = price - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
};

};
fishingBoat(["3600", "Autumn", "6"]);