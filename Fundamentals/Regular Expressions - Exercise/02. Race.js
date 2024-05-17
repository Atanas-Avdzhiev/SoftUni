function solve(input) {

    let names = input.shift().split(', ');
    let object = {};
    let i = 0;
    let command = input[i];

    while (command !== 'end of race') {
        let arrayCommand = command.split('')
        let name = '';
        let km = 0;
        for (const char of arrayCommand) {
            let lettersPattern = /[A-Za-z]/g;
            let numbersPattern = /[0-9]/g;

            if (lettersPattern.exec(char)) {
                name += char;
            }
            else if (numbersPattern.exec(char)) {
                km += Number(char);
            }
        }
        if (names.includes(name)) {
            if (object.hasOwnProperty(name)) {
                object[name] += km;
            }
            else {
                object[name] = km;
            }
        }
        i++;
        command = input[i];
    }
    let entries = Object.entries(object);
    let sorted = entries.sort((a, b) => b[1] - a[1]).splice(0, 3);
    
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

    'Mi*&^%$ch123o!#$%#nne787) ',

    '%$$B(*&&)i89ll)*&) ',

    'R**(on%^&ald992) ',

    'T(*^^%immy77) ',

    'Ma10**$#g0g0g0i0e',

    'end of race'])