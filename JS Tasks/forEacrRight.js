Array.prototype.forEachRight = function(callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        callback(this[i]);
    }
};

const arrayOf10Numbers = [];
for (let i = 0; i < 10; i++) {
    arrayOf10Numbers.push(Math.floor(Math.random() * 100));
};

console.log('Original array of 10 numbers: \n', arrayOf10Numbers);

const reversedArrayOf10Numbers = [];
arrayOf10Numbers.forEachRight((item) => reversedArrayOf10Numbers.push(item));

console.log('Reversed array of 10 numbers: \n', reversedArrayOf10Numbers);