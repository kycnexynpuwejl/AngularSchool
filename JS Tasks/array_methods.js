const fetch = require("node-fetch");

const arrayOf10Numbers = [];
for (let i = 0; i < 10; i++) {
    arrayOf10Numbers.push(Math.floor(Math.random() * 100));
}

const arrayOf10Booleans = [];
for (let i = 0; i < 10; i++) {
    arrayOf10Booleans.push(Boolean(Math.round(Math.random())));
}

console.log('Original array of 10 numbers: \n', arrayOf10Numbers);

console.log('Original array of 10 booleans: \n', arrayOf10Booleans);

console.log('4.1 Reversed array of 10 numbers: \n', arrayOf10Numbers.reverse());

console.log('4.2 Sorted array of 10 numbers: \n', arrayOf10Numbers.sort((a, b) => a - b));

console.log('4.3 Sorted array of 10 booleans: ', arrayOf10Booleans.sort());

async function getUsernames() {
    const results = await fetch("https://randomuser.me/api/?results=50&nat=us,gb");
    const data = await results.json();
    return data.results.map((user) => user.name.first);
}

async function main() {
    const usernames = await getUsernames();

    const arrayOf50Persons = [];
    for (let i = 0; i < 50; i++) {
        arrayOf50Persons.push({
            name: usernames[i],
            age: Math.floor(Math.random() * (50 - 5 + 1) + 5)
        });
    }

    console.log('Original array of 50 persons: \n', arrayOf50Persons);

    console.log('4.4 Sorted by name array of 50 persons: \n',
        arrayOf50Persons.sort((a, b) => a.name.localeCompare(b.name)));

    console.log('4.5 Filtered by age > 18 array of 50 persons: \n',
        arrayOf50Persons.filter(person => person.age > 18));

    console.log('4.6 Double incremented age if name starts with "A": \n',
        arrayOf50Persons
            .map(person => {
                if (person.name.startsWith('A')) {
                    person.age = person.age * 2;
                }
                return person;
            }));

    console.log('4.8 Person with max age: ',
        arrayOf50Persons
            .filter(person => !person.name.startsWith('A'))
            .reduce((max, current) => {
                return current.age > max.age ? current : max;
            }));

    const minAgePerson = arrayOf50Persons.reduce((min, current) => {
        return current.age < min.age ? current : min;
    });

    console.log('4.9 Person with min age: ', minAgePerson);

    console.log('4.9 Excluded person wih min age 1st variant: \n',
        arrayOf50Persons.filter(person => person.age !== minAgePerson.age));

    console.log('4.9 Excluded person wih min age 2nd variant: \n',
        arrayOf50Persons.reduce((accumulator, person) => {
            if (person.age !== minAgePerson.age) {
                accumulator.push(person);
            }
            return accumulator;
        }, []));
}

main();