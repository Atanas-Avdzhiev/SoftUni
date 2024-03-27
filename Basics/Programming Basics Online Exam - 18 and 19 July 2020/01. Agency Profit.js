function solve(input) {

    let name = input[0];
    let numberOfAdultTickets = Number(input[1]);
    let numberOfKidTickets = Number(input[2]);
    let pricePerAdultTicket = Number(input[3]);
    let priceTax = Number(input[4]);

    let pricePerKidTicket = pricePerAdultTicket * 0.3;
    let pricePerAdultWithTax = pricePerAdultTicket + priceTax;
    let pricePerKidWithTax = pricePerKidTicket + priceTax;
    let priceForAllTickets = (numberOfKidTickets * pricePerKidWithTax) + (numberOfAdultTickets * pricePerAdultWithTax);
    let profit = priceForAllTickets * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);

};
solve(["WizzAir",
    "15",
    "5",
    "120",
    "40"]);