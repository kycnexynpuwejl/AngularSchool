const arr = [1, 2, 3, 4, 5, 1, 2, 5, 3, 5, 4];

console.log('Original array:\n', arr);

let uniqueArr = [...new Set(arr)];
console.log('Unique elements array 1st approach:\n', uniqueArr);

uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log('Unique elements array 2nd approach:\n', uniqueArr);
