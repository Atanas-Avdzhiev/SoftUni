// function rightPlace(firstString, char, secondString) {

//     let firstStringFixed = "";

//     for (let index = 0; index < firstString.length; index++) {
//         let currentChar = firstString[index];

//         if (currentChar === "_") {
//             currentChar = char;
//         }
//         firstStringFixed += currentChar;
//     }
//     if (firstStringFixed === secondString) {
//         console.log("Matched")
//     }
//     else {
//         console.log("Not Matched")
//     }
// }
// rightPlace('Str_ng', 'i', 'String')

function replace(string, char, result) {
    let res = string.replace(`_`, char);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);
}
replace('Str_ng', 'i', 'String')