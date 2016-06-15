import point from './Point.js';
class Sequre extends point {
    constructor(top, bottom) {
        super(); 
        this.arr=new Array();
        this.arr.push('xxx');
        this.Top = top;
        this.Button = bottom;
    }
    toString() {
        return `(X:${this.x},Y: ${this.y},Top:${this.Top},Bottom:${this.Button})`;
    }
}
export default Sequre;