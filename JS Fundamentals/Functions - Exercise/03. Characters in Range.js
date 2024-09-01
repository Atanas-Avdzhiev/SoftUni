function charactersRange(firstLetter, secondLetter) {

    let firstNumber = Math.min(firstLetter.charCodeAt(), secondLetter.charCodeAt());
    let secondNumber = Math.max(firstLetter.charCodeAt(), secondLetter.charCodeAt());
    let string = '';
    for (let i = firstNumber + 1; i < secondNumber; i++) {
        let currentChar = String.fromCharCode(i)
        string += currentChar + ' ';
    }
    console.log(string)
}
charactersRange('#', ':')