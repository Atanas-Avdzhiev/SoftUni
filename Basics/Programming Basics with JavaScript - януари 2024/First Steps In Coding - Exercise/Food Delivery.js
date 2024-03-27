function foodDeliveryPrice(input){;
let chickenMenu = Number (input[0]);
let fishMenu = Number (input[1]);
let vegetarianMenu = Number (input[2]);
let Price = (chickenMenu * 10.35) + (fishMenu * 12.40) + (vegetarianMenu * 8.15);
let finalPrice = Price + (Price * 0.20) + 2.50;
console.log(finalPrice);


};
foodDeliveryPrice(["2","4","3"]);