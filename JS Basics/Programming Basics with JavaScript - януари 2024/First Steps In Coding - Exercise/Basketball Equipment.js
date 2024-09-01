function basketballTrainingPrice(input){;
let annualFee = Number(input[0]);
let basketballShoes = annualFee - (annualFee * 0.40);
let basketballOutfit = basketballShoes - (basketballShoes * 0.20);
let basketballBall = (basketballOutfit * 0.25);
let basketballAccessories = (basketballBall * 0.20);
let trainingPrice = annualFee + basketballShoes + basketballOutfit + basketballBall + basketballAccessories;
console.log(trainingPrice);


};
basketballTrainingPrice(["365"]);