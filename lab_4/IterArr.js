const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

function max(mm) {
    let max = -2147483647;
    for (const row of mm) {
        for (const num of row) {
            if (num > max) {
                max = num;
            }
        }
    }
    return max;
}
