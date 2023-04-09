function sumEvens(numbers) {
    let sum = 0;

    numbers.forEach(number => {
        if (number % 2 === 0) sum += number;
    });

    return sum;
}

const arr = [1, 2, 3, 4, 5, 6.0, 7, 8.5];
console.log(sumEvens(arr));