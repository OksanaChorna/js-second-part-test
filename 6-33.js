import users from "./users.js";
//// 6-31
// const getTotalFriendCount = (users) => {
//   return users.reduce((friend, user) => friend + user.friends.length, 0);
// };
// // Пиши код выше этой строкиclg
// console.log(getTotalFriendCount(users));

// 6-42
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// };
// // Пиши код выше этой строки
// console.log(getNamesSortedByFriendCount(users));

// //6-43

// Пиши код ниже этой строки
// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
// // Пиши код выше этой строки
// console.log(getSortedFriends(users));

//// 6-44
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};
// Пиши код выше этой строки
