function areaOfFigures(input){;
let figure = input[0];

if(figure === "square"){;
let a = Number (input[1]);
let areaSquare = a * a;
console.log (areaSquare.toFixed(3));
};

if(figure === "rectangle"){;
let a = Number (input[1]);
let b = Number (input[2]);
let areaRectangle = a * b;
console.log (areaRectangle.toFixed(3));
};

if(figure === "circle"){;
let r = Number (input[1]);
let areaCircle = Math.PI * r * r;
console.log (areaCircle.toFixed(3));
};

if(figure === "triangle"){;
let a = Number (input[1]);
let h = Number (input[2]);
let areaTriangle = (a * h) / 2;
console.log (areaTriangle.toFixed(3));
};

};
areaOfFigures(["triangle", "4.5", "20"]);