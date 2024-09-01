function solve(input) {

    let pattern = /(=|\/)(?<name>[A-Z][a-zA-Z]{2,})\1/g;
    let matches = input.matchAll(pattern);
    let travelPoints = 0;
    let matchesArray = [];

    for (const match of matches) {
        matchesArray.push(match.groups.name);
        travelPoints += match[2].length;
    }
    console.log(`Destinations: ${matchesArray.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");