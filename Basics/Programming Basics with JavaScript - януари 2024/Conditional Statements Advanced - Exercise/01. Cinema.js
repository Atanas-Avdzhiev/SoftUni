function cinema(input){
let projection = input[0];
let rows = Number (input[1]);
let columns = Number (input[2]);

if(projection === "Premiere"){
    price = rows * columns * 12;
}

else if(projection === "Normal"){
    price = rows * columns * 7.50;
}

else if(projection === "Discount"){
    price = rows * columns * 5;
};

console.log(`${price.toFixed(2)} leva`);

};
cinema(["Premiere","10","12"]);