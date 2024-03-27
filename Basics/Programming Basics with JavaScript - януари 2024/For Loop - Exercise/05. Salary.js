function salary(input){

let numberOpenTabs = Number (input[0]);
let salary = Number (input[1]);
let moneyDeducted = 0;

    for(let i = 2; i < input.length; i++){
        switch((input[i])){
            case "Facebook": moneyDeducted += 150;break;
            case "Instagram": moneyDeducted += 100;break;
            case "Reddit": moneyDeducted += 50;break;
        };
    };

    if((salary - moneyDeducted) <= 0){
        console.log("You have lost your salary.");
        return;
    }
    else{
        moneyLeft = salary - moneyDeducted;
        console.log(moneyLeft);
    };

};
salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);