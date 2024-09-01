function moneyForMovie(input){
let budget = Number(input[0]);
let numberOfStatist = Number(input[1]);
let priceForOneStatist = Number (input[2]);
let dekor = budget * 0.1;
let priceForOutfit = priceForOneStatist * numberOfStatist;

if(numberOfStatist > 150){
priceForOutfit *= 0.9;
};
let moneyNeeded = priceForOutfit + dekor;

if(moneyNeeded > budget){
    let moneyStillNeeded = moneyNeeded - budget;
console.log("Not enough money!");
console.log(`Wingard needs ${moneyStillNeeded.toFixed(2)} leva more.`);
}
else{
    let moneyThatRemains = budget - moneyNeeded;
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyThatRemains.toFixed(2)} leva left.`);
}

};
moneyForMovie(["20000","120","55.5"]);