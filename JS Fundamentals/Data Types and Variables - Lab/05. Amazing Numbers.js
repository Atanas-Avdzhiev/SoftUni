function solve(number) {

    let numberString = number.toString()
    let sum = 0;

    for (let index = 0; index < numberString.length; index++) {
        let currentNumber = Number(numberString[index]);
        sum += currentNumber
    }

    let sumString = sum.toString().includes(9)
    console.log(sumString ? `${number} Amazing? True` : `${number} Amazing? False`)
}
solve(999)