function solve(input){
let dogs=Number(input[0]);
let cats=Number(input[1]);
let dogsPrice=dogs*2.50;
let catsPrice=cats*4;
let together=dogsPrice+catsPrice;
console.log(`${together} lv.`);

}
solve(["5","4"])