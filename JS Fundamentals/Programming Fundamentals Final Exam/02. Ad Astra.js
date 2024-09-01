function solve(input) {

    let pattern = /(\#|\|)(?<name>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]+)\1/g;
    let string = input.shift();
    let matches = string.matchAll(pattern);
    let calories = 0;
    for (const match of matches) {
        calories += Number(match.groups.calories);
    }
    let daysLeft = Math.floor(calories / 2000);
    console.log(`You have food to last you for: ${daysLeft} days!`);
    let matches2 = string.matchAll(pattern);
    for (const match of matches2) {
        console.log(`Item: ${match.groups.name}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
    }
}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])