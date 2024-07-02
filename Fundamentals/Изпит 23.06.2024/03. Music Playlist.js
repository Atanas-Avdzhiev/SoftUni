function solve(input) {

    let songs = input.shift().split(' ');
    const numberOfCommands = Number(input.shift());

    for (let i = 1; i <= numberOfCommands; i++) {
        let commandArray = input.shift().split(' * ');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'Add Song':
                let addSong = commandArray[1];
                if (!songs.includes(addSong)) {
                    songs.push(addSong);
                    console.log(`${addSong} successfully added`);
                }
                break;
            case 'Delete Song':
                let numberOfSongs = Number(commandArray[1]);
                if (songs.length >= numberOfSongs) {
                    let songsRemoved = songs.slice(0, numberOfSongs);
                    songs.splice(0, numberOfSongs);
                    console.log(`${songsRemoved.join(', ')} deleted`);
                }
                break;
            case 'Shuffle Songs':
                let songIndex1 = Number(commandArray[1]);
                let songIndex2 = Number(commandArray[2]);
                if (songIndex1 >= 0 && songIndex1 < songs.length && songIndex2 >= 0 && songIndex2 < songs.length) {
                    let firstSong = songs[songIndex1];
                    let secondSong = songs[songIndex2];
                    songs[songIndex1] = secondSong;
                    songs[songIndex2] = firstSong;
                    console.log(`${secondSong} is swapped with ${firstSong}`);
                }
                break;
            case 'Insert':
                let insertSong = commandArray[1];
                let songIndex = Number(commandArray[2]);
                if (songIndex >= 0 && songIndex < songs.length) {
                    if (!songs.includes(insertSong)) {
                        songs.splice(songIndex, 0, insertSong);
                        console.log(`${insertSong} successfully inserted`);
                    }
                    else {
                        console.log('Song is already in the playlist');
                    }
                }
                else {
                    console.log('Index out of range');
                }
                break;
            case 'Sort':
                songs.sort((a, b) => b.localeCompare(a));
                break;
            case 'Play':
                console.log('Songs to Play:');
                console.log(`${songs.join('\n')}`);
                break;
        }
    }
}
solve(["BlindingLights RollingInTheDeep ShapeOfYou",
    "7",
    "Add Song * LetItBe",
    "Delete Song * 1",
    "Shuffle Songs * 1 * 2",
    "Insert * BohemianRhapsody * 0",
    "Add Song * BohemianRhapsody",
    "Sort",
    "Play"])