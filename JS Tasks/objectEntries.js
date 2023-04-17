function objectEntries(obj) {
    return Object.entries(obj);
}

const obj = {
    a: {
        b: 0,
        c: false
    },
    d: 'str'
}

console.log(objectEntries(obj));