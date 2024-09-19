function rectangle(width, height, color) {
    letterToReplace = color[0];
    newLetter = letterToReplace.toUpperCase();
    color = color.replace(letterToReplace, newLetter);
    return obj = {
        width,
        height,
        color,
        calcArea: function () {
            return width * height;
        }
    }
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());