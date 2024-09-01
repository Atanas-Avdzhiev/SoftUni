function solve(string) {
    let arrayOne = [];
    let arrayString = string.split('');
    let arrayStringLength = arrayString.length;

    for (let i = 0; i < arrayStringLength / 2; i++) {
        arrayOne.push(arrayString[0]);
        arrayString.shift();
    }
    console.log(arrayOne.reverse().join(''));
    console.log(arrayString.reverse().join(''));
}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')