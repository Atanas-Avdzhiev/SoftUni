class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        let uniqueBikesAdded = [];
        for (const bike of bikes) {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);
            const findBike = this.availableBikes.find((bikeToFind) => bikeToFind.brand === brand);
            if (findBike) {
                findBike.quantity += quantity;
                if (findBike.price < price) {
                    findBike.price = price;
                }
            }
            else {
                this.availableBikes.push({ brand, quantity, price });
            }
            if (!uniqueBikesAdded.includes(brand)) {
                uniqueBikesAdded.push(brand);
            }
        }
        let result = 'Successfully added ' + uniqueBikesAdded.join(', ');
        return result;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let bikeValid = true;
        for (const bike of selectedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);
            const findBike = this.availableBikes.find((bikeToFind) => bikeToFind.brand === brand);
            if (findBike === undefined) {
                bikeValid = false;
            }
            if (findBike) {
                if (quantity > findBike.quantity) {
                    bikeValid = false;
                }
                else {
                    totalPrice += findBike.price * quantity;
                    findBike.quantity -= quantity;
                }
            }
        }
        if (bikeValid) return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
        else return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
    }

    returnBikes(returnedBikes) {
        let bikeExists = true;
        for (const bike of returnedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);
            const findBike = this.availableBikes.find((bikeToFind) => bikeToFind.brand === brand);
            if (findBike === undefined) {
                bikeExists = false;
            }
            else {
                findBike.quantity += quantity;
            }
        }
        if (bikeExists) return 'Thank you for returning!';
        else return 'Some of the returned bikes are not from our selection.';
    }

    revision() {
        let result = 'Available bikes:';
        let sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);
        for (const bike of sortedBikes) {
            result += `\n${bike.brand} quantity:${bike.quantity} price:$${bike.price}`;
        }
        result += `\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`;
        return result;
    }
}
const rentalService = new BikeRentalService("MyBikes", "CityCenter");
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());