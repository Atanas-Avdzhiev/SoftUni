function solve(words, text) {

    let wordsArray = words.split(', ');

    for (const word of wordsArray) {
        text = text.replace('*'.repeat(word.length), word);
    }
    console.log(text);
}
solve('great, learning', 'softuni is ***** place for ******** new programming languages')