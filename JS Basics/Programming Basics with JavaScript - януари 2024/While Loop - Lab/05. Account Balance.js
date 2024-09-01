function accountBalance(input){
let index = 0;
let sum = 0;

while(input[index] !== "NoMoreMoney"){
    
    if(input[index] < 0){
        console.log("Invalid operation!");
        break;
    };

    console.log(`Increase: ${Number (input[index]).toFixed(2)}`)
    
    sum += Number(input[index]);
    index++;

};

console.log(`Total: ${sum.toFixed(2)}`);

};
accountBalance(["120", "45.55", "-150"]);