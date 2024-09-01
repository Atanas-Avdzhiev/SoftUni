function solve(input) {

    let pattern = /((?:\:\:)|(?:\*\*))[A-Z][a-z]{2,}\1/g;
    let digitPattern = /[0-9]/g;
    let text = input.shift();
    let validMatches = text.match(pattern);
    let digits = text.match(digitPattern);
    let coolTreshold = digits.map(Number).reduce((a, b) => a * b);
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${validMatches.length} emojis found in the text. The cool ones are:`);

    for (const matches of validMatches) {
        let splittedMatch = matches.split('');
        splittedMatch.pop();
        splittedMatch.pop();
        splittedMatch.shift();
        splittedMatch.shift();
        let sum = 0;
        for (const char of splittedMatch) {
            sum += char.charCodeAt();
        }
        if (sum > coolTreshold) {
            console.log(matches);
        }
    }

}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])