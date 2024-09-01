function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let availableSpace = width * length * height;
    let index = 3;
    let boxes = 0;

    while (input[index] !== "Done") {

        boxes += Number(input[index]);

        if (boxes >= availableSpace) {
            console.log(`No more free space! You need ${boxes - availableSpace} Cubic meters more.`);
            return;
        };

        index++;
    };

    //if (availableSpace > boxes) {
        console.log(`${availableSpace - boxes} Cubic meters left.`);
    //};

};
moving(["10",

"1",

"2",

"4",

"6",

"Done"]);