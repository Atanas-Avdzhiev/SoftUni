function convertArrays(strings: string[]): [string, number] {
    let concatenatedString: string = '';

    for (const string of strings) {
        concatenatedString += string;
    }

    return [concatenatedString, concatenatedString.length];
}

console.log(convertArrays(['test and test', 'testing']));