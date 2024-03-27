function solve(input){
let house=Number(input[0]);
let sqm=house*7.61;
let discount=sqm*0.18;
let finalPrice=sqm-discount;
console.log(`The final price is: ${finalPrice} lv.`)
console.log(`The discount is: ${discount} lv.`)
}
solve(["550"])