const a = sum1(1, 2, 3); 
console.log(a); 
const b = sum2(0); 
console.log(b); 
const c = sum3(); 
console.log(c);
const d = sum4(1, -1, 1); 
console.log(d);
const e = sum5(10, -1, -1, -1);
console.log(e);

function sum1(...args) {
    let s = 0;
    for (let i = 0; i < args.length; i++) {
        s += args[i];
    }
    return s;
}

function sum2(...args) {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

function sum3(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}

function sum4(...args) {
    let result = 0;
    let i = 0;
    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}

const sum5 = (...args) => {
    return args.reduce((acc, current) => acc + current, 0);
}
