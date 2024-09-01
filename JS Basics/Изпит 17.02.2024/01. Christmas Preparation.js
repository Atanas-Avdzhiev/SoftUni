function solve(input) {

    let numberPaper = Number(input[0]);
    let numberCloth = Number(input[1]);
    let litresGlue = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let paperPrice = numberPaper * 5.8;
    let clothPrice = numberCloth * 7.2;
    let gluePrice = litresGlue * 1.2;
    let totalPrice = paperPrice + clothPrice + gluePrice;
    let a = 1 - (percentDiscount / 100);

    totalPrice *= a;

    console.log(`${totalPrice.toFixed(3)}`);

};
solve(["4",
    "2",
    "5",
    "13"]);