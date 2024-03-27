function sequence(input){
let n = Number (input[0]);
let specialNumber = 1;

while(specialNumber <= n){
    console.log(specialNumber);
    specialNumber = (specialNumber * 2) + 1;
};


};
sequence(["31"]);