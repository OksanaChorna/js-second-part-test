function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function calculateTotalPrice(orderedItem) {
    totalPrice = totalPrice + orderedItem;
  });
  // Пиши код выше этой строки
  return totalPrice;
}

calculateTotalPrice([412, 371, 94, 63, 176]);

// 6-2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(function filterArray(number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 4); // возвращает [5].
