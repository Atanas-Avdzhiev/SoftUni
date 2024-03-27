function tripPrice(input){
let daysToStay = Number (input[0]);
let roomType = input[1];
let rating = input[2];

if(roomType === "room for one person"){
    price = (daysToStay - 1) * 18;
};

if(roomType === "apartment"){
    
    if(daysToStay < 10){
        price = ((daysToStay - 1) * 25) * 0.70;
    };

    if(daysToStay >= 10 && daysToStay <= 15){
        price = ((daysToStay - 1) * 25) * 0.65;
    };

    if(daysToStay > 15){
        price = ((daysToStay - 1) * 25) * 0.50;
    };
};

if(roomType === "president apartment"){
    
    if(daysToStay < 10){
        price = ((daysToStay - 1) * 35) * 0.90;
    };

    if(daysToStay >= 10 && daysToStay <= 15){
        price = ((daysToStay - 1) * 35) * 0.85;
    };

    if(daysToStay > 15){
        price = ((daysToStay - 1) * 35) * 0.80;
    };
};

if(rating === "positive"){
    price *= 1.25;
};

if(rating === "negative"){
    price *= 0.90;
};

console.log(`${price.toFixed(2)}`);

};
tripPrice(["30","president apartment","negative"]);