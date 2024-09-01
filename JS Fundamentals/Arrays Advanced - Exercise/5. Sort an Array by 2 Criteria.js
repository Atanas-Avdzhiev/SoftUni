function sort(array) {

    array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(array.join(`\n`));
}
sort(['alpha', 'beta', 'gamma']);

//Different solution
// function solve(array) {
//     array.sort((a, b) => {
//         if (a.length !== b.length) {
//             return a.length - b.length;
//         }
//         return a.localeCompare(b);
//     });

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// solve(['alpha', 'beta', 'gamma']);