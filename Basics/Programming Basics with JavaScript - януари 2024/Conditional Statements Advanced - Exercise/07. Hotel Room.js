function hotelRoom(input){
let month = input[0];
let days = Number (input[1]);

if(month === "May" || month === "October"){
    studio = days * 50;
    apartment = days * 65;
    
    if(days > 7 && days <= 14){
        studio *= 0.95;
    };
    if(days > 14){
        studio *= 0.70;
    };
    if(days > 14){
        apartment *= 0.90;
    };
};

if(month === "June" || month === "September"){
    studio = days * 75.20;
    apartment = days * 68.70;

    if(days > 14){
        studio *= 0.80;
    };
    if(days > 14){
        apartment *= 0.90;
    };
};

if(month === "July" || month === "August"){
    studio = days * 76;
    apartment = days * 77;
    if(days > 14){
        apartment *= 0.90;
    };
};

console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
console.log(`Studio: ${studio.toFixed(2)} lv.`);


};
hotelRoom(["August", "20"]);