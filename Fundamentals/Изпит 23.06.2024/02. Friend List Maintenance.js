function solve(input) {

    let usernames = input.shift().split(', ');
    let command = input.shift();
    let blacklistCount = 0;
    let lostCount = 0;

    while (command !== 'Report') {

        let commandArray = command.split(' ');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'Blacklist':
                let name = commandArray[1];
                if (usernames.includes(name)) {
                    let indexOfName = usernames.indexOf(name);
                    usernames[indexOfName] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                    blacklistCount++;
                }
                else {
                    console.log(`${name} was not found.`);
                }
                break;
            case 'Error':
                let index = Number(commandArray[1]);
                if (index >= 0 && index < usernames.length && usernames[index] !== 'Blacklisted' && usernames[index] !== 'Lost') {
                    nameLost = usernames[index];
                    usernames[index] = 'Lost';
                    console.log(`${nameLost} was lost due to an error.`);
                    lostCount++;
                }
                break;
            case 'Change':
                let changeIndex = Number(commandArray[1]);
                let newName = commandArray[2];
                if (changeIndex >= 0 && changeIndex < usernames.length) {
                    oldName = usernames[changeIndex];
                    usernames[changeIndex] = newName;
                    console.log(`${oldName} changed his username to ${newName}.`);
                }
                break;
        }

        command = input.shift();
    }
    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(usernames.join(' '));
}
solve(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])