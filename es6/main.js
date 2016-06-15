import Point from './Point.js';
import Square from './square.js';
class mainpage {
    constructor() {
        this.currentPoint = new Point(1, 23);
        this.currentPoint.setLeftValue(666);
        this.currentPoint.setRightValue(777);

        this.currentSqure = new Square(500, 500);
        this.currentSqure.x= 200;
        this.currentSqure.y = 400;
        
        console.log(this.currentSqure);
        
        var body = document.querySelector('body');
        body.textContent = 'This is javascript orignal point: ' + this.currentPoint;
    }
}
new mainpage();
