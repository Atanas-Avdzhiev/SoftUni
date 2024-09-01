function createSong(array) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = Number(array.shift());
    let typeSong = array.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = array[i].split(`_`);
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong == "all") {
        songs.forEach((i) => console.log(i.name));
    }
    else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}
createSong([4,

    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater'])