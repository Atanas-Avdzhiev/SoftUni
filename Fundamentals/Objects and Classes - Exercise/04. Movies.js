function solve(array) {

    for (let info of array) {
        let command = info.split(' ');
        let object = {
            name: '',
        };
        let isDate = false;
        let isDirected = false;

        if (command[0] === 'addMovie') {
            let movieName = info.split('addMovie ');
            object.name = movieName[1];

            for (let newInfo of array) {
                let splittedNewInfo = newInfo.split(' ');

                if (splittedNewInfo.includes('directedBy')) {
                    let movieNameDirectedBy = newInfo.split(' directedBy ');

                    if (movieName[1] === movieNameDirectedBy[0]) {
                        object.director = movieNameDirectedBy[1];
                        isDate = true;
                    }
                }
                else if (splittedNewInfo.includes('onDate')) {
                    let splittedByOnDate = newInfo.split(' onDate ');

                    if (movieName[1] === splittedByOnDate[0]) {
                        object.date = splittedByOnDate[1];
                        isDirected = true;
                    }
                }
            }
        }
        if (object.name !== '' && isDate === true && isDirected === true) {
            let json = JSON.stringify(object);
            console.log(json);
        }
    }

}
solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford  Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])