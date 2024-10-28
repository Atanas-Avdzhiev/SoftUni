function solve(faceInput, suitInput) {

    let card = {
        face: '',
        suit: '',
        toString: function () {
            console.log(`${this.face}${this.suit}`);
            return `${this.face}${this.suit}`;
        }
    }

    switch (faceInput) {
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
        default: throw new Error('Card is initialized with an invalid face.');
    }

    switch (suitInput) {
        case 'S': suitInput = '\u2660';
            break;
        case 'H': suitInput = '\u2665';
            break;
        case 'D': suitInput = '\u2666';
            break;
        case 'C': suitInput = '\u2663';
            break;
        default: throw new Error('Card is initialized with an invalid suit.');
    }

    card.face = faceInput.toUpperCase();
    card.suit = suitInput.toUpperCase();
    return card;
}
solve('A', 'S')