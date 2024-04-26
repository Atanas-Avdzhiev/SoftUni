function solve(stock, orderedProducts) {

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);

        for (let j = 0; j < orderedProducts.length; j += 2) {
            let orderedProduct = orderedProducts[j];
            let orderedQuantity = Number(orderedProducts[j + 1]);

            if (orderedProduct === product) {
                quantity += orderedQuantity;
                orderedProducts.splice(j, 2);
                j -= 2;
            }
        }

        let object = {
            product: product,
            quantity: quantity
        }
        console.log(`${object.product} -> ${object.quantity}`);
    }
    for (let k = 0; k < orderedProducts.length; k += 2) {
        let orderedProduct = orderedProducts[k];
        let orderedQuantity = Number(orderedProducts[k + 1]);

        let object = {
            product: orderedProduct,
            quantity: orderedQuantity
        }
        console.log(`${object.product} -> ${object.quantity}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])