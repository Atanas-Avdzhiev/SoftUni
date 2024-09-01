function sumNeededForPC(input){
let budget = Number (input [0]);
let videoCards = Number (input[1]);
let processors = Number (input [2]);
let ramMemory = Number (input[3]);
let moneyForVideoCards = videoCards * 250 // 2 * 250 = 500lv
let moneyForProcessors = (moneyForVideoCards * 0.35) * processors; // 175 * 1 = 175lv
let moneyForRamMemory = (moneyForVideoCards * 0.1) * ramMemory; // 50 * 3 = 150lv
let totalPrice = moneyForVideoCards + moneyForProcessors + moneyForRamMemory; // 825lv

if (videoCards > processors){
    totalPrice = totalPrice - (totalPrice * 0.15); // 701.25lv
}
 if (budget >= totalPrice){
    let moneyLeft = budget - totalPrice;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
}
else{
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
};


};
sumNeededForPC(["920.45","3","1","1"]);