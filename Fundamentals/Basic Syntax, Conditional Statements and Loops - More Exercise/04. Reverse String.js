function solve(string) {
    let reversedString = '';

    for (let i = string.length - 1; i > -1; i--) {
        reversedString += string[i];
    }
    console.log(reversedString);
}
solve('Hello')