class Point2D {
    xPos: number;
    private yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;

        this.xPos = 25;
    }
}

const p1 = new Point2D(2, 0);
console.log(p1);

p1.xPos = 5000;
console.log(p1);

const p2 = new Point3D(1, 1, 1);
console.log(p2);
