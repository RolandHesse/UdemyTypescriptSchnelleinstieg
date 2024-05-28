class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    get xPos() {
        return this._xPos;
    }

    set xPos(xPosNew) {
        this._xPos = xPosNew;
    }
}

class Point3D extends Point2D {
    _zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;

        this._xPos = 25;
    }
}

const p1 = new Point2D(2, 0);
console.log(p1);

p1.xPos = 5000;
console.log(p1);

const p2 = new Point3D(1, 1, 1);
console.log(p2);
