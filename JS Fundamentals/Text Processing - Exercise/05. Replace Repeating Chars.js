function solve(string) {

    let stringArray = string.split('');

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === stringArray[i + 1]) {
            stringArray.splice(i, 1);
            i--;
        }
    }
    console.log(stringArray.join(''));
}
solve('qqqwerqwecccwd')