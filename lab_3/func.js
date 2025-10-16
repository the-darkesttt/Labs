const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateKey = (length, characters) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        const index = random(characters.length);
        result += characters[index];
    }
    return result;
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key);
