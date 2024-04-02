function number(number) {

    for (let i = 1; i <= number; i++) {

        let numberString = i.toString();
        let sum = 0;
        for (let j = 0; j < numberString.length; j++) {
            sum += Number(numberString[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }
    }

}
number(20)