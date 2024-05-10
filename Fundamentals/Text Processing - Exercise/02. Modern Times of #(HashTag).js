function solve(string) {

    let stringArray = string.split(' ');

    for (const el of stringArray) {
        if (el[0] === '#' && el.length > 1) {
            let word = el.split('');
            word.shift();
            isValid = true;

            for (const letter of word) {
                if ((letter.charCodeAt() < 65 || letter.charCodeAt() > 90) && (letter.charCodeAt() < 97 || letter.charCodeAt() > 122)) {
                    isValid = false;
                }
            }
            if (isValid === true) {
                console.log(word.join(''));
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')