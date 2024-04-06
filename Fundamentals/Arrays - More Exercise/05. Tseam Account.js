function solve(array) {

    let games = array[0].split(' ');
    let index = 1;

    while (array[index] !== 'Play!') {
        let command = [];
        command = array[index].split(' ')
        let currentCommand = command[0];
        let currentGame = command[1];
        let ifExists = games.includes(currentGame);
        let indexOfGame = games.indexOf(currentGame);
        switch (currentCommand) {
            case "Install":
                if (ifExists === false) {
                    games[games.length] = currentGame;
                }
                break;
            case "Uninstall":
                if (ifExists) {
                    games.splice(indexOfGame, 1);
                }
                break;
            case "Update":
                if (ifExists) {
                    games.splice(indexOfGame, 1);
                    games[games.length] = currentGame;
                }
                break;
            case "Expansion":
                let gameExpansion = currentGame.split("-");
                let gameExpansion1 = gameExpansion[0];

                if (games.includes(gameExpansion1)) {
                    games.splice(games.indexOf(gameExpansion[0]) + 1, 0, gameExpansion.join(":"));

                }
                break;
        }
        index++
    }
    console.log(games.join(' '))
}
solve(['CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!'])