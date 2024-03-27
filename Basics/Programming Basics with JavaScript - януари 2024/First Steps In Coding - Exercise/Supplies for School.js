function schoolMaterialsPrice(input){;
let numberPens = Number (input[0]);
let numberMarkers = Number (input[1]);
let litresDetergent = Number (input[2]);
let percentageReduction = Number (input[3]);
let percentageReductionInPercent = percentageReduction / 100;
let discountInBgn = ((numberPens * 5.80) + (numberMarkers * 7.20) + (litresDetergent*1.20))*percentageReductionInPercent; // (11.6 + 21.6 + 4.8)*0.25
let totalPrice = ((numberPens * 5.80) + (numberMarkers * 7.20) + (litresDetergent*1.20)) - discountInBgn;
console.log(totalPrice);

};
schoolMaterialsPrice(["2","3","4","25"]);