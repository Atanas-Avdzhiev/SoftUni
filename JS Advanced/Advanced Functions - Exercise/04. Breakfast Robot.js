function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function (input) {
        const [command, microelementOrRecipe, quantity] = input.split(' ');
        if (command === 'restock') {
            ingredients[microelementOrRecipe] += Number(quantity);
            return 'Success';
        }
        else if (command === 'prepare') {
            switch (microelementOrRecipe) {
                case 'apple': {
                    const carbohydrateNeeded = 1 * Number(quantity);
                    const flavourNeeded = 2 * Number(quantity);
                    if (ingredients.carbohydrate < carbohydrateNeeded) {
                        return `Error: not enough carbohydrate in stock`;
                    }
                    else if (ingredients.flavour < flavourNeeded) {
                        return `Error: not enough flavour in stock`;
                    }
                    else {
                        ingredients.carbohydrate -= carbohydrateNeeded;
                        ingredients.flavour -= flavourNeeded;
                        return `Success`;
                    }
                }
                    break;
                case 'lemonade': {
                    const carbohydrateNeeded = 10 * Number(quantity);
                    const flavourNeeded = 20 * Number(quantity);
                    if (ingredients.carbohydrate < carbohydrateNeeded) {
                        return `Error: not enough carbohydrate in stock`;
                    }
                    else if (ingredients.flavour < flavourNeeded) {
                        return `Error: not enough flavour in stock`;
                    }
                    else {
                        ingredients.carbohydrate -= carbohydrateNeeded;
                        ingredients.flavour -= flavourNeeded;
                        return `Success`;
                    }
                }
                    break;
                case 'burger': {
                    const carbohydrateNeeded = 5 * Number(quantity);
                    const fatNeeded = 7 * Number(quantity);
                    const flavourNeeded = 3 * Number(quantity);
                    if (ingredients.carbohydrate < carbohydrateNeeded) {
                        return `Error: not enough carbohydrate in stock`;
                    }
                    else if (ingredients.fat < fatNeeded) {
                        return `Error: not enough fat in stock`;
                    }
                    else if (ingredients.flavour < flavourNeeded) {
                        return `Error: not enough flavour in stock`;
                    }
                    else {
                        ingredients.carbohydrate -= carbohydrateNeeded;
                        ingredients.fat -= fatNeeded;
                        ingredients.flavour -= flavourNeeded;
                        return `Success`;
                    }
                }
                    break;
                case 'eggs': {
                    const proteinNeeded = 5 * Number(quantity);
                    const fatNeeded = 1 * Number(quantity);
                    const flavourNeeded = 1 * Number(quantity);
                    if (ingredients.protein < proteinNeeded) {
                        return `Error: not enough protein in stock`;
                    }
                    else if (ingredients.fat < fatNeeded) {
                        return `Error: not enough fat in stock`;
                    }
                    else if (ingredients.flavour < flavourNeeded) {
                        return `Error: not enough flavour in stock`;
                    }
                    else {
                        ingredients.protein -= proteinNeeded;
                        ingredients.fat -= fatNeeded;
                        ingredients.flavour -= flavourNeeded;
                        return `Success`;
                    }
                }
                    break;
                case 'turkey': {
                    const proteinNeeded = 10 * Number(quantity);
                    const carbohydrateNeeded = 10 * Number(quantity);
                    const fatNeeded = 10 * Number(quantity);
                    const flavourNeeded = 10 * Number(quantity);
                    if (ingredients.protein < proteinNeeded) {
                        return `Error: not enough protein in stock`;
                    }
                    else if (ingredients.carbohydrate < carbohydrateNeeded) {
                        return `Error: not enough carbohydrate in stock`;
                    }
                    else if (ingredients.fat < fatNeeded) {
                        return `Error: not enough fat in stock`;
                    }
                    else if (ingredients.flavour < flavourNeeded) {
                        return `Error: not enough flavour in stock`;
                    }
                    else {
                        ingredients.protein -= proteinNeeded;
                        ingredients.carbohydrate -= carbohydrateNeeded;
                        ingredients.fat -= fatNeeded;
                        ingredients.flavour -= flavourNeeded;
                        return `Success`;
                    }
                }
                    break;
            }
        }
        else {
            let result = '';
            for (const ingredient in ingredients) {
                result += `${ingredient}=${ingredients[ingredient]} `;
            }
            return result.trim();
        }
    }

}
let manager = solution();
console.log(manager('restock flavour 50 '))
console.log(manager('prepare lemonade 4 '))
console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))