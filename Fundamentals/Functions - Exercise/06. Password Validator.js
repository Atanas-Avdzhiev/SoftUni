function passwordValidator(password) {

    let digits = 0;
    let isWrongPassword = false;

    for (let i = 0; i < password.length; i++) {
        let isDigit = password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57;
        let isBigLetters = password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90;
        let isSmallLetters = password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122;

        if (isDigit) {
            digits++;
        }

        if (isDigit === false && isBigLetters === false && isSmallLetters === false) {
            isWrongPassword = true;
        }
    }
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (isWrongPassword === true) {
        console.log('Password must consist only of letters and digits')
    }
    if (digits < 2) {
        console.log('Password must have at least 2 digits')
    }
    if (isWrongPassword === false && (password.length >= 6 && password.length <= 10) && digits >= 2) {
        console.log('Password is valid')
    }

}
passwordValidator('MyPass123')