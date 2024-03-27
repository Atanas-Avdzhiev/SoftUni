function password(input){
let name = input[0];
let correctPassword = input[1];
let index = 2;

while(index < input.length){
    
    if(input[index] === correctPassword){
        console.log(`Welcome ${name}!`);
        return;
    };
    index++;
};

};
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"]);