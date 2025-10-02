const range = (start, end) => {
    let arr_UwU = [];
    for (let i = start; i <= end; i++) {
        arr_UwU.push(i);
    }
    return arr_UwU;
};

console.log(range(15, 30));

const rangeOdd = (start, end) => {
    let arr_uWu = [];
    for (let i = start; i <= end; i++) {
        if (i % 2) {
            arr_uWu.push(i);
        }
    }
    return arr_uWu;
};

console.log(rangeOdd(15, 30));
