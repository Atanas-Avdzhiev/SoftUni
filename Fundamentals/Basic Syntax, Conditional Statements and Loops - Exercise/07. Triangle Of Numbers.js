function triangle(number) {

    for (let i = 1; i <= number; i++) {
        let a = ""
        for (let j = 1; j <= i; j++) {
            a += i + " ";
        }
        console.log(a)
    }

}
triangle(3)