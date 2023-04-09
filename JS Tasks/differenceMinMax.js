function differenceMinMax(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
}

const array1 = [23, 3, 19, 21, 16];
console.log(differenceMinMax(array1));

const array2 = [1, 434, 555, 34, 112];
console.log(differenceMinMax(array2));