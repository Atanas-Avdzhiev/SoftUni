function solve(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.0-9]*(?<price>[0-9.]+)\$/g;
    let i = 0;
    let command = input[i];
    let totalIncome = 0;

    while (command !== "end of shift") {

        pattern.lastIndex = 0;
        let match = pattern.exec(command);
        if (match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            totalIncome += totalPrice;
            console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
        i++;
        command = input[i];
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])