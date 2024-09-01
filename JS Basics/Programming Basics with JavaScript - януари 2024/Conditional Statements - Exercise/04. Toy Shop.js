function moneyForTrip(input){
let moneyNeededForTrip = Number (input[0]);
let puzzles = Number (input[1]);
let dolls = Number (input[2]);
let bears = Number (input[3]);
let minions = Number (input[4]);
let trucks = Number (input[5]);
let money = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2); // 680
let toysNumber = puzzles + dolls + bears + minions + trucks;
if (toysNumber >= 50){
money *= 0.75; // 510
};

let moneyWithoutRent = money - (money * 0.1);

if(moneyWithoutRent >= moneyNeededForTrip){
let leftMoney = moneyWithoutRent - moneyNeededForTrip;
console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
}
else {
    let moneyNeeded = moneyNeededForTrip - moneyWithoutRent;
console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);

}
}
moneyForTrip(["320", "8", "2", "5", "5", "1"]);