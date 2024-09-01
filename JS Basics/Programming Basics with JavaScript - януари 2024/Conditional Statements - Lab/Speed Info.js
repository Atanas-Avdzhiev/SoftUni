function speedTest(input) {;
let speed = Number(input[0]);

if (speed <= 10) {;
console.log("slow");
};

if (speed > 10) {;
    if(speed <= 50){;
console.log("average");
    };
};

if (speed > 50) {;
    if(speed <= 150){;
console.log("fast");
    };
};

if (speed > 150) {;
    if(speed <= 1000){;
console.log("ultra fast");
    };
};

if (speed > 1000) {;
console.log("extremely fast");
};


};
speedTest(["50"])