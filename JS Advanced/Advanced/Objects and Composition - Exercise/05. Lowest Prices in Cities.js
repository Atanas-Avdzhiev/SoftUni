function solve(input) {

    let res = {};

    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(' | ');
        price = Number(price);
        if (!res[product] || price < res[product].price) {
            res[product] = { town: town, price: price };
        }
    }
    for (const product in res) {
        console.log(`${product} -> ${res[product].price} (${res[product].town})`);
    }
}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 100000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])