export class Point {

  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('x is ' + this._x + ' and y is ' + this._y);
  }

  getDistance(another: Point) {

  }

  set x(value) {
    if(value < 0)
      throw new Error('value cannot be less than 0')

    this._x = value;
  }
}
