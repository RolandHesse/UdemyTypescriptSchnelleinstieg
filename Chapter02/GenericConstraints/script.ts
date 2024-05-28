interface Seized {
    length: number;
}

function lengthComparison<Type extends Seized>(arr1: Type, arr2: Type) {
    if (arr1.length >= arr2.length) {
        return arr1;
    }

    return arr2;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2];

const r1 = lengthComparison(arr1, arr2);
console.log(r1);

interface MyGrades {
    grades: number[];
    length: number;
}

const jans_grades: MyGrades = {
    grades: [1, 1, 1],
    length: 3,
};

const daniels_grades: MyGrades = {
    grades: [2, 2, 2],
    length: 3,
};

console.log(lengthComparison(jans_grades, daniels_grades));
