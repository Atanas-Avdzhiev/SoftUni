function solve(array) {

    let price = 0;
    let i = 0;
    let command = array[i];

    while (command !== 'regular' && command !== 'special') {

        let currentPrice = Number(command);

        if (currentPrice > 0) {
            price += currentPrice;
        }
        else {
            console.log('Invalid price!');
        }

        i++;
        command = array[i];
    }
    let taxes = price * 0.2;

    if (price === 0) {
        console.log('Invalid order!');
    }
    else if (command === 'regular') {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${(price + taxes).toFixed(2)}$`);
    }
    else {
        let discount = (price + taxes) * 0.1;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${((price + taxes) - discount).toFixed(2)}$`);
    }
}
solve(['regular'])