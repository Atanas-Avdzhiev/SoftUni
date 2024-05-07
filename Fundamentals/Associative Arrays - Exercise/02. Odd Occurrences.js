function solve(string) {

    let lowerCase = string.toLowerCase();
    let arrayWords = lowerCase.split(' ');
    let resultObject = {};

    for (const word of arrayWords) {
        if (!resultObject.hasOwnProperty(word)) {
            resultObject[word] = 1;
        }
        else {
            resultObject[word]++;
        }
    }
    let resultString = '';
    for (const key in resultObject) {
        if (resultObject[key] % 2 !== 0) {
            resultString += [key] + ' ';
        }
    }
    console.log(resultString);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')