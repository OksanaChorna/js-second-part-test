function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const doubledNumbers = numbers.map((num) => {
    if (num % 2 === 0) {
      return num + value;
    } else {
      return num;
    }
  });
  return doubledNumbers;
  // Пиши код выше этой строки
}
changeEven([2, 8, 3, 7, 4, 6], 10);
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
