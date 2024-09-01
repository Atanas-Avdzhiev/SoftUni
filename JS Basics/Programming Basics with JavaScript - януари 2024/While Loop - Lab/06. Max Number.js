function maxNumber(input){
let index = 0;
let maxNumber = Number (input[0]);

while(input[index] !== "Stop"){
    
    if(Number (input[index]) < Number (input[index + 1])){
        maxNumber = Number (input[index + 1])
    };
    index++;

};

console.log(maxNumber);

};
maxNumber(["-1", "-2", "Stop"]);