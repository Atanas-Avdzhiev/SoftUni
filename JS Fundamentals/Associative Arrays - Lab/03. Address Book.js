function addressBook(array) {

    let addressBook = {};

    for (const line of array) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let addressBookEKV = Object.entries(addressBook);
    let sortedAddressBook = addressBookEKV.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of sortedAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])