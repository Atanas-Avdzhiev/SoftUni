function solve(array) {

    let vipGuests = [];
    let regularGuests = [];
    let currentGuest = array.shift();

    while (currentGuest !== 'PARTY') {

        if (!isNaN(currentGuest[0])) {
            vipGuests.push(currentGuest);
        }
        else {
            regularGuests.push(currentGuest);
        }

        currentGuest = array.shift();
    }
    let concatedArray = vipGuests.concat(regularGuests);

    for (const guest of array) {
        if (concatedArray.includes(guest)) {
            concatedArray.splice(concatedArray.indexOf(guest), 1);
        }
    }
    console.log(concatedArray.length);
    console.log(concatedArray.join('\n'));
}
solve(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])