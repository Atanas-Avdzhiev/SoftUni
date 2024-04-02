function solve(string) {

    num = Number(string)

    for (let i = 0; i < num; i++) {

        let letteri = String.fromCharCode(97 + i)

        for (let j = 0; j < num; j++) {

            let letterj = String.fromCharCode(97 + j)

            for (let m = 0; m < num; m++) {
                let letterm = String.fromCharCode(97 + m)
                console.log(letteri + letterj + letterm)
            }

        }

    }
}
solve('2');