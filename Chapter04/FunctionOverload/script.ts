class Point2D {
    xPos: number;
    protected _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this._yPos = yPosInput;
    }

    get yPos() {
        return this._yPos;
    }
}

function printCoordinates(arg1: Point2D): void;
function printCoordinates(arg1: number, arg2: number): void;
function printCoordinates(arg1: number, arg2: number, arg3: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown, arg3?: unknown) {
    if (typeof arg1 === 'object') {
        console.log((arg1 as Point2D).xPos, (arg1 as Point2D).yPos);
    } else if (typeof arg3 === 'number') {
        console.log(arg1, arg2, arg3);
    } else {
        console.log(arg1, arg2);
    }
}

const p1 = new Point2D(27, 38);
printCoordinates(p1);

printCoordinates(-8000, 8000);

printCoordinates(2, 3, 5);
