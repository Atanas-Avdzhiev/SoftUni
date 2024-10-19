class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const flightNumberExists = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (flightNumberExists) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }
        else {
            this.flights.push({
                flightNumber: flightNumber,
                destination: destination,
                departureTime: departureTime,
                price: price,
            })
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        const flightNumberExists = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (!flightNumberExists) {
            return `Flight ${flightNumber} is not available for booking.`;
        }
        else {
            this.bookings.push({
                passengerName: passengerName,
                flightNumber: flightNumber,
                destination: flightNumberExists.destination,
                departureTime: flightNumberExists.departureTime,
                price: flightNumberExists.price,
            })
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        const flightPassengerAndNumberExists = this.bookings.find(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);
        if (!flightPassengerAndNumberExists) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }
        else {
            const indexToRemove = this.bookings.indexOf(flightPassengerAndNumberExists);
            this.bookings.splice(indexToRemove, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }
        let result = '';
        switch (criteria) {
            case 'all':
                result += `All bookings(${this.bookingsCount}):`;
                for (const booking of this.bookings) {
                    result += `\n${booking.passengerName} booked for flight ${booking.flightNumber}.`;
                }
                return result;
                break;

            case 'cheap':
                const cheapFlightsExists = this.bookings.filter(booking => booking.price <= 100);
                if (cheapFlightsExists.length === 0) {
                    return 'No cheap bookings found.';
                }
                else {
                    result += 'Cheap bookings:';
                    for (const cheapBooking of cheapFlightsExists) {
                        result += `\n${cheapBooking.passengerName} booked for flight ${cheapBooking.flightNumber}.`;
                    }
                    return result;
                }
                break;

            case 'expensive':
                const expensiveFlightsExists = this.bookings.filter(booking => booking.price > 100);
                if (expensiveFlightsExists.length === 0) {
                    return 'No expensive bookings found.';
                }
                else {
                    result += 'Expensive bookings:';
                    for (const expensiveBooking of expensiveFlightsExists) {
                        result += `\n${expensiveBooking.passengerName} booked for flight ${expensiveBooking.flightNumber}.`;
                    }
                    return result;
                }
                break;
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("all"));