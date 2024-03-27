function bitcoin(input) {

    let boughtBitcoins = 0;
    let days = 0;
    let currentMoney = 0;
    let dayOfFirstBoughtBitcoin = 0;

    for (let index = 0; index < input.length; index++) {
        days += 1;
        let dig = input[index];
        if (days % 3 === 0) {
            dig *= 0.7;
        }
        let digMoney = dig * 67.51;
        currentMoney += digMoney;

        while (currentMoney >= 11949.16) {
            currentMoney -= 11949.16
            boughtBitcoins += 1;
            if (boughtBitcoins === 1) {
                dayOfFirstBoughtBitcoin = days;
            }
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBoughtBitcoin}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);

}
bitcoin([3124.15, 504.212, 2511.124]);