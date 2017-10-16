let message = 'abc';
// let endsWithC = message.endsWith('c');

class Point {
  x: number;
  y: number;

  draw() {
    console.log('x is ' + this.x + ' and y is ' + this.y);
  }

  getDistance(another: Point) {

  }
}

let point = new Point();
point.draw();
