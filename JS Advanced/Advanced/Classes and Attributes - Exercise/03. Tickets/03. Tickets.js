function solve(array, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticketsArray = [];

    for (const line of array) {
        const [destination, price, status] = line.split('|');
        const currentTicket = new Ticket(destination, Number(price), status);
        ticketsArray.push(currentTicket);
    }

    let sortedTickets;

    if (sortCriteria === 'destination') {
        sortedTickets = ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria === 'price') {
        sortedTickets = ticketsArray.sort((a, b) => a.price - b.price);
    }
    else if (sortCriteria === 'status') {
        sortedTickets = ticketsArray.sort((a, b) => a.status.localeCompare(b.status));
    }
    return sortedTickets;
}
solve(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination')