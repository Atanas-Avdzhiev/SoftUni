// function solve(first, second, third) {

//     let sum = first + second + third;

//     if (sum % 1 === 0) {
//         console.log(`${sum} - Integer`)
//     }
//     else {
//         console.log(`${sum} - Float`)
//     }

// }
// solve(100, 200, 303);

function solve(first, second, third) {

    let sum = first + second + third;
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum)

}
solve(9, 100, 1.1)