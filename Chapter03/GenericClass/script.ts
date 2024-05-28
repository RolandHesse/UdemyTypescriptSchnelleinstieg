interface Sized {
    length: number;
}

class DataBox<Type extends Sized> {
    content: Type;

    constructor(input: Type) {
        this.content = input;
    }

    print() {
        console.log(this.content);
    }
}

const d1 = new DataBox('🦈');
d1.print();
console.log(d1.content);

const d2 = new DataBox(42);
d2.print();

const d3 = new DataBox([1, 2, 3]);
d3.print();
