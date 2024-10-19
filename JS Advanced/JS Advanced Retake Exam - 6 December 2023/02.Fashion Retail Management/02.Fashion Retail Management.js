class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        const findProductName = this.productStock.find((product) => product.productName === productName && product.size === size);
        if (findProductName) {
            findProductName.quantity += Number(quantity);
            return `You added ${quantity} more pieces of product ${productName} size ${findProductName.size}`;
        }
        else {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        const findProductName = this.productStock.find((product) => product.productName === productName && product.size === size);
        if (findProductName === undefined) throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        else {
            const indexToRemove = this.productStock.indexOf(findProductName);
            this.productStock.splice(indexToRemove, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {
        let productsMatchSize = [];
        this.productStock.forEach((product) => {
            if (product.size === size) {
                productsMatchSize.push(product);
            }
        });
        if (productsMatchSize.length === 0) return 'There are no products available in that size';
        else {
            let result = [];
            productsMatchSize.forEach((match) => {
                result.push(`${match.productName}-${match.quantity} pieces`);
            });
            return result.join(', ');
        }
    }

    listProducts() {
        if (this.productStock.length === 0) return `${this.storehouse} storehouse is empty`;
        else {
            let result = `${this.storehouse} storehouse in ${this.location} available products:`;
            let sortedProducts = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
            sortedProducts.forEach((product) => {
                result += `\n${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`;
            });
            return result;
        }
    }
}
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());