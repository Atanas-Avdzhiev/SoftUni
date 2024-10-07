function solve(array) {

    const cards = [];

    for (const card of array) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substring(card.length - 1);
        switch (face) {
            case '2':
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
            case '7':
                break;
            case '8':
                break;
            case '9':
                break;
            case '10':
                break;
            case 'J':
                break;
            case 'Q':
                break;
            case 'K':
                break;
            case 'A':
                break;
            default: console.log(`Invalid card: ${card}`)
                return;
        }
        switch (suit) {
            case 'S': suit = '\u2660';
                break;
            case 'H': suit = '\u2665';
                break;
            case 'D': suit = '\u2666';
                break;
            case 'C': suit = '\u2663';
                break;
            default: console.log(`Invalid card: ${card}`)
                return;
        }
        cards.push(face + suit);
    }
    console.log(cards.join(' '));
}
solve(['AS', '10D', 'KH', '2C'])