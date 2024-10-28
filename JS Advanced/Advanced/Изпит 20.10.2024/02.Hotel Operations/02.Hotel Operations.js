class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
        this._numberOfRoomTypes = 0;
    }

    restockSupplies(supplies) {
        let result = '';
        supplies.forEach(supply => {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (supplyTotalPrice <= this.initialBudget) {
                if (this.supplyStock.hasOwnProperty(supplyName)) {
                    this.supplyStock[supplyName] += supplyQuantity;
                }
                else {
                    this.supplyStock[supplyName] = supplyQuantity;
                    this.initialBudget -= supplyTotalPrice; // maybe need to be also inside the parent if?

                    if (result.length === 0) {
                        result += `Successfully stocked ${supplyQuantity} ${supplyName}`;
                    }
                    else {
                        result += `\nSuccessfully stocked ${supplyQuantity} ${supplyName}`;
                    }
                }
            }
            else {
                if (result.length === 0) {
                    result += `There was not enough money to restock ${supplyQuantity} ${supplyName}`;
                }
                else {
                    result += `\nThere was not enough money to restock ${supplyQuantity} ${supplyName}`;
                }
            }
        })
        return result;
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            this.roomAvailability[roomType] = { neededSupplies, pricePerNight };
            this._numberOfRoomTypes++;
            return `Great idea! Now with the ${roomType}, we have ${this._numberOfRoomTypes} types of rooms available, any other ideas?`;
        }
        else {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }
    }

    showAvailableRooms() {
        let result = '';
        for (const room in this.roomAvailability) {
            if (result.length === 0) {
                result += `${room} - $ ${this.roomAvailability[room].pricePerNight}`;
            }
            else {
                result += `\n${room} - $ ${this.roomAvailability[room].pricePerNight}`;
            }
        }
        if (result.length === 0) return 'Our rooms are not ready yet, please come back later...';
        else return result;
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) return `There is no ${roomType} available, would you like to book another room?`;
        else {
            let areSuppliesAvailable = true;
            this.roomAvailability[roomType].neededSupplies.forEach(supply => {
                let [supplyName, supplyQuantity] = supply.split(' ');
                supplyQuantity = Number(supplyQuantity);
                if (!this.supplyStock.hasOwnProperty(supplyName)) {
                    areSuppliesAvailable = false;
                }
                else if (this.supplyStock[supplyName] < supplyQuantity) {
                    areSuppliesAvailable = false;
                }
            })
            if (areSuppliesAvailable) return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`;
            else return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
        }
    }
}
let hotel = new Hotel(500);
console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));