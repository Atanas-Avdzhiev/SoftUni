function orders(product, quantity) {
    let price = 0;

    if (product === 'coffee') {
        price = quantity * 1.5;
    }
    else if (product === 'water') {
        price = quantity;
    }
    else if (product === 'coke') {
        price = quantity * 1.4;
    }
    else if (product === 'snacks') {
        price = quantity * 2;
    }
    console.log(price.toFixed(2))
}
orders("water", 5)