class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        let distanceX = Math.abs(p1.x - p2.x);
        let distanceY = Math.abs(p1.y - p2.y);
        let result = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        return result;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));