function flowers(input){
let flower = input [0];
let numberFlowers = Number (input[1]);
let budget = Number (input[2]);

if(flower === "Roses"){
    price = numberFlowers * 5;
    
    if(numberFlowers > 80){
        price = (numberFlowers * 5) * 0.9;
    };
};


if(flower === "Dahlias"){
    price = numberFlowers * 3.80;
    
    if(numberFlowers > 90){
        price = (numberFlowers * 3.80) * 0.85;
    };
};


if(flower === "Tulips"){
    price = numberFlowers * 2.80;
    
    if(numberFlowers > 80){
        price = (numberFlowers * 2.80) * 0.85;
    };
};

if(flower === "Narcissus"){
    price = numberFlowers * 3;
    
    if(numberFlowers < 120){
        price = (numberFlowers * 3) * 1.15;
    };
};

if(flower === "Gladiolus"){
    price = numberFlowers * 2.50;
    
    if(numberFlowers < 80){
        price = (numberFlowers * 2.50) * 1.20;
    };
};

if(budget >= price){
    let leftMoney = budget - price;
console.log(`Hey, you have a great garden with ${numberFlowers} ${flower} and ${leftMoney.toFixed(2)} leva left.`);
};

if(budget < price){
    let moneyNeeded = price - budget;
console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
};

};
flowers(["Roses","55","250"]);