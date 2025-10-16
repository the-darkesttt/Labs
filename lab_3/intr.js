const iface = {
    m1: (x) => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    m4(x, y, z, q) {
        return [x, y, z, q];
    },
};

const introspect = (obj) => {
    return Object.keys(obj)
        .filter((key) => typeof obj[key] === "function")
        .map((key) => [key, obj[key].length]);
};

console.log(introspect(iface));
