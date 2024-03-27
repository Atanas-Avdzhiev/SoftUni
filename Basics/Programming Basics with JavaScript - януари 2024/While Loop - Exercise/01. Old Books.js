function books(input) {
    let book = input[0];
    let index = 1;
    let bookIsFound = false;

    while (input[index] !== "No More Books") {

        if (book === input[index]) {

            bookIsFound = true;
            break;
        };

        index++;
    };

    if (bookIsFound === true) {
        console.log(`You checked ${index - 1} books and found it.`);
    }
    else {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }

};
books(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"]);