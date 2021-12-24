"use strict";

let v = 5;
console.log(v++);
// 5


// [] + false - null + true
console.log([] + false)
// returned false but string type Пустой массив в таких операциях приводится к пустой строке
console.log([] + false - null) 
// NaN - String не может вычитаться 
console.log([] + false - null + true)
// Nan - Все операции с Nan дают NaN


let y = 1; 
let x = y = 2; 
// цепочка справа налево, y присвоили 2, потом х присвоили у. Это последовательное присваивание.
console.log(x)


// [] + 1 + 2  ====> 12 string


console.log("1"[0]); 
// ====> 1 string обратились к первому элементу строки состоящей из 1 элемента


2 && 1 && null && 0 && undefined 
// ====> false оператор И запинается на лжи, оператор ИЛИ запинается на правде


console.log(!!(1 && 2) === (1 && 2));
// ====> false, тк (1 && 2) вернет 2 а не boolean; !!(1 && 2) вернет boolean

console.log( null || 2 && 3 || 4)
// ====> вернет 3 оператор ИЛИ запинается(останавливается, возвращает) правду
// Приоритет операторов в JS есть таблица

console.log(+"infinity") 
// ====> infinity typeof Number

console.log("Ёжик" > "яблоко")
// ====> вернет false, нужно смотреть таблицу символов Unicode и проверять

console.log(0 || "" || 2 || undefined || true || false)
// ====> вернет 2 тк 0 "" дают false и пропускаются