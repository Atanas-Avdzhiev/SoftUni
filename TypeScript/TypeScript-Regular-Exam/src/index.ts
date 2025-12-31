// index.ts 
import { PropertyManager } from './property-manager';
import { Apartment, House } from './property-types';
import { Client } from './models';

async function main() {
    // --- Input 1: Adding and Listing Properties ---
    // const manager = new PropertyManager();
    // const apt1 = new Apartment(1, "10 Main St", 80, 5, 200000);
    // const house1 = new House(2, "5 Oak Ln", 150, 50, 350000);

    // console.log(manager.addProperty(apt1));
    // console.log(manager.addProperty(house1));
    // manager.listAllProperties().forEach(line => console.log(line));

    //--- Input 2: Decorator Application and Client Registration (Assuming Apartment has salePrice getter decorated) ---
    // const manager = new PropertyManager();
    // const apt1 = new Apartment(1, "10 Main St", 80, 5, 200000); 
    // manager.addProperty(apt1);

    // const alice: Client = { name: "Alice", phone: "555-1234" };

    // console.log(manager.registerClient(1, alice)); 
    // console.error(manager.registerClient(0, alice)); 

    // --- Input 3: Find by ID and Zero Tax Test ---
    // const manager3 = new PropertyManager();
    // const apt3 = new Apartment(10, "Minimal Flat", 0, 0, 50000); 
    // const house4 = new House(20, "Gardenless Villa", 100, 0, 300000);

    // manager3.addProperty(apt3);
    // manager3.addProperty(house4);

    // const foundHouse = manager3.findProperty(20);
    // const notFound = manager3.findProperty(99);

    // console.log(`--- Searching for Property ID 20 ---`);
    // console.log(foundHouse ? `Found: ${foundHouse.address} (Tax: ${foundHouse.getAnnualTax().toFixed(2)})` : "Not Found");
    // console.log(`Is ID 99 found? ${notFound ? 'Yes' : 'No'}`);

    // manager3.listAllProperties().forEach(line => console.log(line));

    // --- Input 4: Decorator Commission Test ---
    // const manager4 = new PropertyManager();
    // const apt4 = new Apartment(3, "No Decorator", 100, 1, 100000); 
    // const house5 = new House(4, "Commission House", 100, 10, 500000); 

    // manager4.addProperty(apt4);
    // manager4.addProperty(house5);

    // console.log(`--- Commission Check ---`);
    // console.log(`House Base Price: ${house5.baseSalePrice}`);
    // console.log(`House Final Price: ${house5.finalSalePrice}`);
    // console.log(`Apartment Base Price: ${apt4.baseSalePrice}`);
    // console.log(`Apartment Final Price: ${apt4.finalSalePrice || 'N/A (No Decorator)'}`);

    // --- Input 5: Multiple Client Registration Test ---
    // const manager5 = new PropertyManager();
    // const apt5 = new Apartment(5, "Client Test Apt", 90, 2, 180000);

    // manager5.addProperty(apt5);

    // const bob: Client = { name: "Bob Johnson", phone: "555-8888" };
    // const carol: Client = { name: "Carol Davis", phone: "555-9999" };

    // console.log(manager5.registerClient(5, bob));
    // console.log(manager5.registerClient(5, carol));
    // console.error(manager5.registerClient(6, bob));
}

main();

export {
    PropertyManager,
    Apartment,
    House
};