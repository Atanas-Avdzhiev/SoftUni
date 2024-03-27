function numberOperations(input){
let number1 = Number (input[0]);
let number2 = Number (input[1]);
let operator = input[2];

if(operator === "+" || operator === "-" || operator === "*"){
    
    if(operator === "+"){
        result = number1 + number2;
    };

    if(operator === "-"){
        result = number1 - number2;
    };

    if(operator === "*"){
        result = number1 * number2;
    };

    if(result % 2 === 0){
        evenOrOdd = "even";
    }

    if(result % 2 !== 0){
        evenOrOdd = "odd";
    }

    console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
};

if(operator === "/"){
    result = number1 / number2;

    if(number2 !== 0){
    console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
    }
    else{
        console.log(`Cannot divide ${number1} by zero`);
    };

};

if(operator === "%"){
    result = number1 % number2;

    if(number2 !== 0){
    console.log(`${number1} % ${number2} = ${result}`);
    }
    else {
        console.log(`Cannot divide ${number1} by zero`);
    };
};

};
numberOperations(["10", "0", "%"]);