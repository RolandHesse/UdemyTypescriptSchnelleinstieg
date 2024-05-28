const array = [1, 2, 3];

function arraySum(arg: number[]) {
    let arraySum: number = 0;
    arg.forEach((element) => {
        arraySum += element;
    });
    return arraySum;
}

const sum1 = arraySum(array);
console.log(sum1);

function simpleSum(...numbers: number[]) {
    let result: number = 0;
    numbers.forEach((number) => (result += number));
    return result;
}

const sum2 = simpleSum(1, 2, 3, sum1);
console.log(sum2);
