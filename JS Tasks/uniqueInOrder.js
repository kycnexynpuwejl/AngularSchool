function uniqueInOrder(array) {
    let uniqueArray = [];
    array.forEach((element, index) => {
        if (element !== array[index - 1]) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}

console.log(uniqueInOrder([1, 1, 2, 6, 6, 3, 3, 3, 6, 6, 3, 3, 3, 4, 4, 5, 6]));