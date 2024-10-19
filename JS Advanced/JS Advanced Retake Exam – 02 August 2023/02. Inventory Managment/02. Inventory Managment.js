class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        if (this.items.length >= this.capacity) {
            throw new Error('The inventory is already full.');
        }
        const itemExists = this.items.find((item) => item.hasOwnProperty(itemName));
        if (!itemExists) {
            this.items.push({ [itemName]: quantity });
        }
        else {
            itemExists[itemName] += quantity;
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        const itemExists = this.items.find((item) => item.hasOwnProperty(itemName));
        if (!itemExists) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }
        if (quantity > itemExists[itemName]) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }
        itemExists[itemName] -= quantity;
        if (itemExists[itemName] === 0) {
            const indexOfItem = this.items.indexOf(itemExists);
            this.items.splice(indexOfItem, 1);
            this.outOfStock.push(itemExists);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        const itemExists = this.items.find((item) => item.hasOwnProperty(itemName));
        if (itemExists) {
            itemExists[itemName] += quantity;
        }
        else {
            this.items.push({ [itemName]: quantity });
        }

        const itemExistsInOutOfStock = this.outOfStock.find((item) => item.hasOwnProperty(itemName));
        if (itemExistsInOutOfStock) {
            const indexOfItem = this.outOfStock.indexOf(itemExistsInOutOfStock);
            this.outOfStock.splice(indexOfItem, 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let result = 'Current Inventory:';
        for (const item of this.items) {
            const itemEntries = Object.entries(item);
            result += `\n${itemEntries[0][0]}: ${itemEntries[0][1]}`;
        }
        if (this.outOfStock.length > 0) {
            result += '\nOut of Stock: ';
            for (const item of this.outOfStock) {
                const itemEntries = Object.entries(item);
                result += `${itemEntries[0][0]}, `;
            }
            result = result.slice(0, result.length -2);
        }
        return result;
    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());