function cake(input) {

    let width = Number(input[0]);
    let height = Number(input[1]);
    let numberOfPieces = width * height;
    let index = 2;

    while(index < input.length){
        
        if(input[index] === "STOP"){           
            console.log(`${numberOfPieces} pieces are left.`);
            return;
        };
        numberOfPieces -= Number(input[index]);
        index++;

        if(numberOfPieces < 0){
            console.log(`No more cake left! You need ${-numberOfPieces} pieces more.`);
            return;
        };
    };

};
cake(["10",

"10",

"20",

"20", "20", "20", "21"]);