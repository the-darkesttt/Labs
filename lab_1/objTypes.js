const arr_1 = [
    true,
    "luna",
    "mlp",
    90,
    -365,
    true,
    false,
    "celestia",
    3.14,
    null,
    undefined,
    { a: 228 },
    [1, 69, 3],
    () => {},
];

let counter = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
    function: 0,
};

const func_1 = (arr) => {
    for (const item of arr) {
        const type = typeof item;
        if (counter.hasOwnProperty(type)) {
            counter[type]++;
        }
    }

    console.log(counter);
};

func_1(arr_1);

const arr_2 = [
    "apple jack",
    "hello",
    5,
    undefined,
    true,
    true,
    false,
    "sparkle",
    2.71,
    null,
    "rarity",
    { a: 52 },
    [4, 0, 4],
    () => {},
];

counter = {};

const func_2 = (arr) => {
    for (const item of arr) {
        const type = typeof item;
        if (!counter[type]) {
            counter[type] = 0;
        }
        counter[type]++;
    }
    console.log(counter);
};

func_2(arr_2);
