function languages(country) {

    let language = "";

    switch (country) {
        case "USA":
        case "England": language = "English"; break
        case "Spain":
        case "Argentina":
        case "Mexico": language = "Spanish"; break
        default: language = "unknown"

    }

    console.log(language);

}
languages("USA");