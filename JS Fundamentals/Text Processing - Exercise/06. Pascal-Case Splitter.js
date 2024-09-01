function solve(input) {

    let array = [];
    let string = '';

    for (let i = 0; i < input.length; i++) {
        currentLetter = input[i];
        string += currentLetter;

        if (i < input.length - 1) {
            if (input[i + 1] === input[i + 1].toUpperCase()) {
                array.push(string);
                string = '';
            }
        }
        else {
            array.push(string);
        }
    }
    console.log(array.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')