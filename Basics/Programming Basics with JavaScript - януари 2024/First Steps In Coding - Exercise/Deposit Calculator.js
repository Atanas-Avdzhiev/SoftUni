function depositCalculator(input){;
let depositSum = Number (input[0]);
let depositTime = Number (input[1]);
let annualInterestRate = Number (input[2]);
let annualInterestRateInPercent = annualInterestRate / 100;
let totalSum = depositSum + depositTime * ((depositSum*annualInterestRateInPercent)/12);
console.log (totalSum);


};
depositCalculator(["200", "3", "5.7"]);