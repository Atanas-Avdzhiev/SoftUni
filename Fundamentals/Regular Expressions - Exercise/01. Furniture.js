function solve(input) {

    let pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/g;
    let i = 0;
    let totalPrice = 0;
    let items = [];

    while (input[i] !== "Purchase") {
        let match = pattern.exec(input[i]);

        while (match !== null) {
            totalPrice += Number(match.groups.price) * Number(match.groups.quantity);
            items.push(match.groups.item);
            match = pattern.exec(input[i]);
        }

        i++;
    }
    console.log('Bought furniture:');
    if (items.length > 0) {
        console.log(items.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
solve(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',

    '>Invalid<<!5',

    '>>TV<<300.21314!20',

    '>>Invalid<!5',

    '>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase'])