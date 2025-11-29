const res1 = seq(x => x + 7)(x => x * 2)(5);
console.log(res1);
const res2 = seq(x => x * 2)(x => x + 7)(5);
console.log(res2);
const res3 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
console.log(res3);

function seq(firstFunc) {
    const func = [firstFunc]; 
    function chain(arg) {
        if (typeof arg === 'number') {
            let result = arg;
            for (let i = func.length - 1; i >= 0; i--) {
                result = func[i](result);
            }
            return result;
        } else {
            func.push(arg);
            return chain;
        }
    }
    return chain;
}


