const phoneBook = [
    { name: "Jon", phone: "+380500599550" },
    { name: "Ben", phone: "+380500500550" },
    { name: "Mark", phone: "+380500550550" },
    { name: "Alice", phone: "+380500503350" },
    { name: "SpongeBob", phone: "+380522500550" },
];

const findPhoneByName = (personName) => {
    for (let person of phoneBook) {
        if (person.name == personName) {
            return person.phone;
        }
    }
};

console.log(findPhoneByName("Mark"));

// hash-table

const newPhoneBook = new Map(
    phoneBook.map((entry) => [entry.name, entry.phone])
);

const newFindPhoneByName = (personName) => {
    return newPhoneBook.get(personName) || "Error";
};

console.log(newFindPhoneByName("Mark"));
