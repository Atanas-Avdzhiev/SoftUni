function login(input) {

    let username = input[0];
    let password = "";
    let maxTry = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let index = 1; index < input.length; index++) {
        let command = input[index];
        password = "";
        for (let i = command.length - 1; i >= 0; i--) {
            password += command[i];
        }
        if (password !== username) {
            maxTry += 1;

            if (maxTry >= 4) {
                console.log(`User ${username} blocked!`)
                return;
            }

            console.log(`Incorrect password. Try again.`)
        }
        else {
            console.log(`User ${username} logged in.`)
            return;
        }
    }

}
login(['sunny',
    'rainy',
    'cloudy',
    'sunny',
    'not sunny']);