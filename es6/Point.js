class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setLeftValue(left) {
        this.x = left;
    }
    setRightValue(right)
    {
        this.y=right;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
export default Point;