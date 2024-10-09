function solve(input) {

    sum = {};
    bottles = {};

    for (const line of input) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!sum.hasOwnProperty(juice)) {
            sum[juice] = quantity;
        }
        else {
            sum[juice] += quantity;
        }
        if (sum[juice] >= 1000) {
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = Math.floor(sum[juice] / 1000);
            }
            else {
                bottles[juice] += Math.floor(sum[juice] / 1000);
            }
            sum[juice] = sum[juice] % 1000;
        }
    }
    for (const bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`);
    }
}
solve(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])