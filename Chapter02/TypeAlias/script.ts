type Addable = number | string;

function add(arg1: Addable, arg2: Addable) {
    if (typeof arg1 == 'number' && typeof arg2 == 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 == 'string' && typeof arg2 == 'string') {
        return arg1 + arg2;
    }

    return;
}

const a1 = 'Roli';
const a2 = ' Guacamoli';
const r1 = add(a1, a2);

const a3 = 'Roli';
const a4 = 3000;
const r2 = add(a1, a2);
