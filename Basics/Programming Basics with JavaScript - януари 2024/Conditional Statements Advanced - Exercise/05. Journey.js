function journey(input){
let budget = Number (input[0]);
let season = input[1];

if(budget <= 100){
    destination = "Bulgaria";
    
    if(season === "summer"){
        price = budget * 0.30;
    };

    if(season === "winter"){
        price = budget * 0.70;
    };
};

if(budget > 100 && budget <= 1000){
    destination = "Balkans";
    
    if(season === "summer"){
        price = budget * 0.40;
    };

    if(season === "winter"){
        price = budget * 0.80;
    };
};

if(budget > 1000){
    destination = "Europe";
    price = budget * 0.90;
};

if(season === "summer"){
    type = "Camp";
};

if(season === "winter"){
    type = "Hotel";
};

if(destination === "Europe"){
    type = "Hotel";
};

console.log(`Somewhere in ${destination}`);
console.log(`${type} - ${price.toFixed(2)}`);


};
journey(["1500", "summer"]);