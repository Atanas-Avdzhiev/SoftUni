function solve(first, second) {

    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            if (first[i] === second[j]) {
                console.log(first[i])
            }
        }
    }

}
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])