const array = ['a', 'b', 'c', 'd'];
let obj = {};
const root = obj;

array.forEach(function(item, index) {
    if (index === array.length - 1) {
        obj[item] = null;
    } else {
        obj[item] = {};
    }
    obj = obj[item];
});

console.log(JSON.stringify(root, null, 2));