const result = unique([2, 1, 1, 3, 2]);
console.log(result);

function unique (array){
    const res = [];
    for (const item of array) {
        if (!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result1 = difference(array1, array2);
console.log(result1);

function difference (array1, array2){
    const res = [];
    for (const item of array1) {
        if (!array2.includes(item)) {
            res.push(item);
        }
    }
    return res;
}