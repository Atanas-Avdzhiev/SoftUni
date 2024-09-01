function solve(input) {

    let string = input.shift();
    let pattern = /(@|#)(?<firstPart>[a-zA-Z]{3,})\1\1(?<secondPart>[a-zA-Z]{3,})\1/g;
    let matches = string.matchAll(pattern);
    let numberMatched = 0;
    let mirrorOnes = {};

    for (const match of matches) {

        let firstWord = match.groups.firstPart;
        let secondWord = match.groups.secondPart;
        let reversedSecondWord = secondWord.split('').reverse().join('');
        if (firstWord === reversedSecondWord) {
            mirrorOnes[firstWord] = secondWord;
        }
        numberMatched++;
    }
    let mirrorWords = '';
    for (const word in mirrorOnes) {
        mirrorWords += `${word} <=> ${mirrorOnes[word]}, `;
    }
    mirrorWords = mirrorWords.split('');
    mirrorWords.pop();
    mirrorWords.pop();
    if (pattern.exec(string)) {
        console.log(`${numberMatched} word pairs found!`);
    }
    else {
        console.log(`No word pairs found!`);
    }
    if (Object.keys(mirrorOnes).length === 0) {
        console.log('No mirror words!');
    }
    else {
        console.log('The mirror words are:')
        console.log(mirrorWords.join(''));
    }
}
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])