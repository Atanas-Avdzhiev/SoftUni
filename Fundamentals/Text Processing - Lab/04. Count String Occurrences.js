function solve(text, word) {

    let counter = 0;
    let textArray = text.split(' ');

    for (const el of textArray) {
        if (el === word) {
            counter++;
        }
    }
    console.log(counter);
}
solve('This is a word and it also is a sentence', 'is')