const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

function contract (fn, ...types){
    return (...args) => {
        const x = types.slice(0, -1);
        const y = types[types.length - 1];
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const expectedType = x[i];
            if (arg.constructor !== expectedType) {
                throw new TypeError(`Ви конкретно нерпаві тут`);
            }
        }
        const result = fn(...args);
        if (result.constructor !== y) {
            throw new TypeError(`You're not even trying`);
        }
        return result;
    };
}