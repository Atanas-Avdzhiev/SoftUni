function solve(input) {

    let array = [];

    input.forEach(line => {
        let splittedLine = line.split(' ');
        if (splittedLine.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1];
            array.push({ name: movieName });
        }
        else if (splittedLine.includes('directedBy')) {
            let [movieNameDirected, movieDirector] = line.split(' directedBy ');
            let findMovie = array.find(obj => obj.name === movieNameDirected);
            if (findMovie) {
                findMovie.director = movieDirector;
            }
        }
        else if (splittedLine.includes('onDate')) {
            let [movieNameDated, movieDate] = line.split(' onDate ');
            let findMovie2 = array.find(obj => obj.name === movieNameDated);
            if (findMovie2) {
                findMovie2.date = movieDate;
            }
        }
    })
    array.forEach(obj => {
        if (obj.name && obj.director && obj.date) {
            let json = JSON.stringify(obj);
            console.log(json);
        }
    })
}
solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',])