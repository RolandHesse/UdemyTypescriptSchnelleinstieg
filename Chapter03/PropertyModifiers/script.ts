interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string;
}

const a1: Point2D = { xPos: 0, yPos: 0, name: 'neutral point' };

a1.name = 'horst point';

const a2: Point2D = { xPos: 0, yPos: 0 };
