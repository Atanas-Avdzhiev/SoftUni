function solve(input) {
    let numberOfPasswords = Number(input.shift());
    let pattern = /^(\W+|[a-zA-Z]+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>|]{3})<\1$/;

    for (let i = 0; i < numberOfPasswords; i++) {
        let currentPassword = input.shift();
        let match = currentPassword.match(pattern);
        if (match) {
            let firstPart = match[2];
            let secondPart = match[3];
            let thirdPart = match[4];
            let fourthPart = match[5];
            let encryptedPassword = firstPart + secondPart + thirdPart + fourthPart;
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log('Try another password!');
        }
    }
}
solve([
    "5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*",
    "$$$>312|dfe|KFE|@!#<$$$"
]);