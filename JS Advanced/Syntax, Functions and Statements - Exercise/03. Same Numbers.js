function solve(number) {

    let string = number.toString();
    let array = string.split('');
    let isSame = array.every(x => x === array[0]);
    array = array.map(Number);
    let sum = array.reduce((x, y) => x + y);
    console.log(isSame);
    console.log(sum);

}
solve(2222222)