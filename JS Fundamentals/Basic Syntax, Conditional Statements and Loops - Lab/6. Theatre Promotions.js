function solve(type, age) {

    let ticketPrice = 0;

    switch (type) {

        case "Weekday":

            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            }

            if (18 < age && age <= 64) {
                ticketPrice = 18;
            }

            if (64 < age && age <= 122) {
                ticketPrice = 12;
            }

            break;

        case "Weekend":

            if (0 <= age && age <= 18) {
                ticketPrice = 15;
            }

            if (18 < age && age <= 64) {
                ticketPrice = 20;
            }

            if (64 < age && age <= 122) {
                ticketPrice = 15;
            }
            break;

        case "Holiday":

            if (0 <= age && age <= 18) {
                ticketPrice = 5;
            }

            if (18 < age && age <= 64) {
                ticketPrice = 12;
            }

            if (64 < age && age <= 122) {
                ticketPrice = 10;
            }
            break;
    }

    if (age >= 0 && age <= 122) {
        console.log(`${ticketPrice}$`);
    }
    else {
        console.log("Error!");
    }

}
solve('Weekday', 42);