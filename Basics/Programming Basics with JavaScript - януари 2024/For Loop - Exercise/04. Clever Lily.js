function cleverLily(input){

let age = Number (input[0]);
let price = Number (input[1]);
let pricePerToy = Number (input[2]);
let moneyFromEvenBirthdays = 0;
let moneyFromOddBirthdays = 0;

for(let i = 1; i <= age; i++){
    
    if(i % 2 === 0){
        moneyFromEvenBirthdays += ((i / 2) * 10) - 1;
    };

    if(i % 2 !== 0){
        moneyFromOddBirthdays += pricePerToy;
    };

};

let totalMoneySaved = moneyFromEvenBirthdays + moneyFromOddBirthdays;

if(totalMoneySaved >= price){
    moneyLeft = totalMoneySaved - price;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
}
else{
    moneyNeeded = price - totalMoneySaved;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
};

};
cleverLily(["10","170.00","6"]);