const numbers = [1, 3, 5, 6, 8, 1, 5, 4, 9, 7, 6, 5, 2, 3];
const newNumbers = [...new Set(numbers)];
console.log(newNumbers.sort());
