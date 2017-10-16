"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x is ' + this._x + ' and y is ' + this._y);
    };
    Point.prototype.getDistance = function (another) {
    };
    Object.defineProperty(Point.prototype, "x", {
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports["default"] = Point;
