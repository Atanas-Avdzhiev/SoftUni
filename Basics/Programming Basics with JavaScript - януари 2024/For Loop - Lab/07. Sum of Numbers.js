function SumOfNumbers(input){
let word = input[0];
let sum = 0;

for(let i = 0; i < word.length; i++){
    sum += Number(word[i]);
};

console.log(`The sum of the digits is:${sum}`);

};
SumOfNumbers(["564891"]);