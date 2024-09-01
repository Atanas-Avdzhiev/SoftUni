function solve(word, text) {

    let wordLowerCase = word.toLowerCase();
    let textLowerCase = text.toLowerCase();
    let textArray = textLowerCase.split(' ');

    for (const el of textArray) {
        if (el === wordLowerCase) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
solve('javascript', 'JavaScript is the best programming language')