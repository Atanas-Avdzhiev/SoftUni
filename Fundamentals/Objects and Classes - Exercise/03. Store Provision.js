function solve(stock, orderedProducts) {

    let object = {};

    for (let i = 0; i < stock.length; i += 2) {
        object[stock[i]] = Number(stock[i + 1]);
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        if (object.hasOwnProperty(orderedProducts[j])) {
            object[orderedProducts[j]] += Number(orderedProducts[j + 1]);
        }
        else {
            object[orderedProducts[j]] = Number(orderedProducts[j + 1]);
        }
    }
    for (const key in object) {
        console.log(`${key} -> ${object[key]}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])