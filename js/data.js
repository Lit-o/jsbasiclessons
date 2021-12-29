'use strict';

// const now = new Date('2021-12-29');
//             new Date.parse('2021-12-29') тоже что и выше
// const now = new Date(2021, 12, 29, 20);
// const now = new Date(0);
const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours() + " UTC");
// console.log(now.getTimezoneOffset() + " UTC differense in min");
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());

console.log(now.setHours(18, 40));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 2;
}

let end = new Date();

console.log(`Цикл отработал за ${(end - start)/1000} секунд`)