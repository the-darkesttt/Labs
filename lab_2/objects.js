const fn = () => {
    const obj1 = { name: "" };
    let obj2 = { name: "" };

    // змінювати значення всередині можливо
    obj1.name = "Joe";
    obj2.name = "Ben";

    // obj1 = { hasJob: true };
    // неможливо задати нове значення, адже є константою
    obj2 = { hasJob: false };
};

const createUser = (name, city) => {
    return { name, city };
};
console.log(createUser("Marcus Aurelius", "Roma"));
