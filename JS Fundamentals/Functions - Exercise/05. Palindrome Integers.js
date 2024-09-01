function palindrome(array) {

    for (let i = 0; i < array.length; i++) {
        let currentString = array[i].toString();
        let reversed = currentString.split("").reverse().join("")

        if (currentString === reversed) {
            console.log(true)
        }
        else {
            console.log(false)
        }

    }

}
palindrome([123, 323, 421, 121])