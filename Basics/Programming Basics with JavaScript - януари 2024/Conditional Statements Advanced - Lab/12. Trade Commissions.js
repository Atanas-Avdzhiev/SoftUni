function comissions(input){
let city = input[0];
let sales = Number (input[1]);
let comission = 0;

if(sales >= 0 && sales <= 500){
    
    switch(city){
    case "Sofia": comission = sales * 0.05;break
    case "Varna": comission = sales * 0.045;break
    case "Plovdiv": comission = sales * 0.055;break
    default: console.log("error");
};
};

if(sales > 500 && sales <= 1000){
    
    switch(city){
    case "Sofia": comission = sales * 0.07;break
    case "Varna": comission = sales * 0.075;break
    case "Plovdiv": comission = sales * 0.08;break
    //default: console.log("error");
};
};

if(sales > 1000 && sales <= 10000){
    
    switch(city){
    case "Sofia": comission = sales * 0.08;break
    case "Varna": comission = sales * 0.10;break
    case "Plovdiv": comission = sales * 0.12;break
    //default: console.log("error");
};
};

if(sales > 10000){
    
    switch(city){
    case "Sofia": comission = sales * 0.12;break
    case "Varna": comission = sales * 0.13;break
    case "Plovdiv": comission = sales * 0.145;break
    //default: console.log("error");
};
};

if((city !== "Sofia" && city !== "Varna" && city !== "Plovdiv") || sales < 0){
    console.log("error");
};

if(comission !== 0){
console.log(comission.toFixed(2));
};

};
comissions(["Bourgas","1500"]);