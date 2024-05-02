function words(array) {

    let words = {};

    for (const word of array) {
        if (words[word]) {
            words[word]++;
        }
        else {
            words[word] = 1;
        }
    }

    let entries = Object.entries(words);
    entries.sort((a, b) => b[1] - a[1]);
    let entriesToObject = Object.fromEntries(entries);

    for (const key in entriesToObject) {
        console.log(`${key} -> ${entriesToObject[key]} times`);
    }
}
words(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"])