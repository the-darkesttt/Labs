const average = (a, b) => (a + b) / 2;
const square = (a) => a ** 2;
const cube = (a) => a ** 3;

const calculate = () => {
    let result = [];
    for (let i = 0; i <= 9; i++) {
        result.push(average(square(i), cube(i)));
    }
    return result;
};

console.log(calculate());
