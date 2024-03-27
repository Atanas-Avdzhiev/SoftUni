function minNumber(input){
    let index = 0;
    let minNumber = Number (input[0]);
    
    while(input[index] !== "Stop"){
        
        if(Number (input[index]) > Number (input[index + 1])){
            minNumber = Number (input[index + 1])
        };
        index++;
    
    };
    
    console.log(minNumber);
    
    };
    minNumber(["100",

    "99",
    
    "80",
    
    "70",
    
    "Stop"]);