function without(array, ...values) {
    return array.filter(item => !values.includes(item));
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = without(arr, 2, 4, 9, 10);

console.log(result);