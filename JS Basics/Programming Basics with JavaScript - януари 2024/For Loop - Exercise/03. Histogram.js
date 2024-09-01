function histogram(input){
    
    let n = Number(input[0]);
    let a = input.length; //4
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    
    for(let i = 1; i < a; i++){
        
        if(input[i] < 200){
            p1 += 1;
        };

        if(input[i] >= 200 && input[i] <= 399){
            p2 += 1;
        };

        if(input[i] >= 400 && input[i] <= 599){
            p3 += 1;
        };

        if(input[i] >= 600 && input[i] <= 799){
            p4 += 1;
        };

        if(input[i] >= 800){
            p5 += 1;
        };
        
    };

    let p1AsPercent = (p1 / n) * 100;
    let p2AsPercent = (p2 / n) * 100;
    let p3AsPercent = (p3 / n) * 100;
    let p4AsPercent = (p4 / n) * 100;
    let p5AsPercent = (p5 / n) * 100;

    console.log(`${p1AsPercent.toFixed(2)}%`);
    console.log(`${p2AsPercent.toFixed(2)}%`);
    console.log(`${p3AsPercent.toFixed(2)}%`);
    console.log(`${p4AsPercent.toFixed(2)}%`);
    console.log(`${p5AsPercent.toFixed(2)}%`);

};
histogram(["3","1","2","999"]);