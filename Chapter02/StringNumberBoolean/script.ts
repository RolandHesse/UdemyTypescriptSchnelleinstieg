function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}

const a1 = 53;
const a2 = 'Roli';

const r1 = add(a1, a2);

const a3 = ' Hügeli';
const r2 = concatenate(a2, a3);
console.log(r2);
