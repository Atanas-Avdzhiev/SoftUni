function litresInAquarium(input){;
let length = Number (input[0]);
let width = Number (input[1]);
let height = Number (input[2]);
let percentNumber = Number (input[3]);
let percent = percentNumber / 100 // 17 / 100 = 0.17% 
let volumeParallelepiped = length * width * height; // 85 * &5 * 47 = 299625
let cubicMeters = volumeParallelepiped - (volumeParallelepiped * percent); // 299625 - 50936.25 = 248,688.75
let litres = cubicMeters / 1000; // 1 cubic meters = 1000 cubic decimeters
console.log(litres);

};
litresInAquarium(["85","75","47","17"]);