function solve(array) {

    let words = array.shift().split(' ');
    let resultObject = {};

    for (const word of words) {
        resultObject[word] = 0;
    }

    for (const word of array) {
        if (resultObject.hasOwnProperty(word)) {
            resultObject[word]++;
        }
    }

    let sortedEntries = Object.entries(resultObject).sort((a, b) => b[1] - a[1]);
    let objectFromEntries = Object.fromEntries(sortedEntries);

    for (const key in objectFromEntries) {
        console.log(`${key} - ${objectFromEntries[key]}`);
    }
}
solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'])