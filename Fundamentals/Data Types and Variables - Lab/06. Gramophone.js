function gramophone(band, album, song) {

    let durationInSeconds = (album.length * band.length) * song.length / 2;
    let rotated = durationInSeconds / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotated)} times.`)

}
gramophone('Rammstein', 'Sehnsucht', 'Engel')