function solve(input) {

    let totalTickets = 0;
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let index = 0;
    let command = input[index];

    while (command !== "Finish") {

        let movieName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let totalTicketsForCurrentMovie = 0;
        command = input[index];

        while (command !== "End") {

            totalTickets++;
            totalTicketsForCurrentMovie++;

            if (command === "standard") {
                standardTickets++;
            };

            if (command === "student") {
                studentTickets++;
            };

            if (command === "kid") {
                kidTickets++;
            };

            if (totalTicketsForCurrentMovie === freeSeats) {
                break;
            };
            index++;
            command = input[index];

        };

        let seatsTaken = (totalTicketsForCurrentMovie / freeSeats) * 100;

        console.log(`${movieName} - ${seatsTaken.toFixed(2)}% full.`);

        index++;
        command = input[index];
    };

    let studentTicketsTaken = studentTickets / totalTickets * 100;
    let standartTicketsTaken = standardTickets / totalTickets * 100;
    let kidsTicketsTaken = kidTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsTaken.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsTaken.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsTaken.toFixed(2)}% kids tickets.`);

};
solve(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"]);