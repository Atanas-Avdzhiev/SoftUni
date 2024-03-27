function paintingPrice(input){;
let nylon = Number (input[0]);
let paint = Number (input[1]);
let thinner = Number (input[2]);
let hours = Number (input[3]);
let nylonPrice = (nylon + 2) * 1.50; // 12*1.5 = 18
let paintPrice = (paint + (paint * 0.10)) * 14.50; // 11+1.1 = 12.1 * 14.5 = 175.45
let thinnerPrice = thinner * 5; // 4 * 5 = 20
let hoursPrice = ((nylonPrice + paintPrice + thinnerPrice +0.40) * 0.30) * hours; // 213.85 * 0.3 = 64.155 * 8 = 513.24
let finalPrice = nylonPrice + paintPrice + thinnerPrice + hoursPrice +0.40; // 18+175.45+20+512.28+0.40 = 726.13
console.log(finalPrice);


};
paintingPrice (["10","11","4","8"]);