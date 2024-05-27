// how to replace everything in a string, without using replaceAll

let string = 'WORDStestingreplacementWORDSWORDSWORDStestWORDShelloWORDSfhjuighfruighfuiWORDS';
let partToReplace = 'WORDS';
let toReplaceWith = 'REPLACED';
let index = string.indexOf(partToReplace);

while (index !== -1) {
    string = string.replace(partToReplace, toReplaceWith)
    index = string.indexOf(partToReplace);
}
console.log(string);