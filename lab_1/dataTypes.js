// 1

var inc = (n) => n + 2;

const a = 5;
const b = inc(a);

console.dir({ a, b });

// 2

var inc2 = (num) => {
    num.n = num.n + 1;
};
const obj = { n: 5 };
inc2(obj);
console.dir(obj);
