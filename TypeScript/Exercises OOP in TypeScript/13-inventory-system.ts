class Product {
    private static productCount: number = 0;
    readonly id: number;
    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        Product.productCount++;
        this.id = Product.productCount;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length === 0) throw new Error('Name must contain at least 1 character');
        this._name = newName;
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        if (newPrice <= 0) throw new Error('Price must be positive');
        this._price = newPrice;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        let products: string = '';
        this.products.forEach(product => products += `ID: ${product.id}, Name: ${product.name}, Price: $${product.price}\n`);

        return `${products.trim()}\nTotal products created: ${this.products.length}`;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());

// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;