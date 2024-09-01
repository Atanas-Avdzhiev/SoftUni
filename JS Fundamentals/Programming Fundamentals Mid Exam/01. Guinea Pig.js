function solve(array) {

    let food = Number(array[0]) * 1000;
    let hay = Number(array[1]) * 1000;
    let cover = Number(array[2]) * 1000;
    let weight = Number(array[3]) * 1000;

    for (let day = 1; day <= 30; day++) {

        if (day % 3 === 0 && day % 2 !== 0) {
            food -= 300;
            cover -= (weight / 3);
        }
        else if (day % 2 === 0 && day % 3 !== 0) {
            food -= 300;
            hay -= (food * 0.05);
        }
        else if (day % 2 === 0 && day % 3 === 0) {
            food -= 300;
            hay -= (food * 0.05);
            cover -= (weight / 3);
        }
        else {
            food -= 300;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
solve(["10", "5", "5.2", "1"])