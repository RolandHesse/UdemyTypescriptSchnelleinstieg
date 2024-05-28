let arr = [1, 2, 3];
console.log(arr);

function printArray(arr: number[]) {
    console.log(arr);
}

printArray(arr);

function printTuple(tpl: [number, number, string]) {
    console.log(tpl);
}

let tpl: [number, number, string] = [27, 43, 'Roli'];
printTuple(tpl);
