function solve(array) {

    let k = array.shift();
    let firstLine = array.slice(0, k).join(' ');
    let secondLine = array.slice(array.length - k).join(' ');
    console.log(firstLine);
    console.log(secondLine);

}
solve([2, 7, 8, 9])