const originalObject = {
    name: 'Pavel',
    age: 31,
    address: {
        city: 'Homel',
        street: 'Bileckogo, 9'
    },
    occupation: 'Software Engineer',
    married: false
};

const shallowCopy = { ...originalObject };
console.log('Shallow copy: \n', shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(originalObject));
console.log('Deep copy: \n', deepCopy);