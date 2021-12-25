"use strict";

// String() превращает в строку
console.log(typeof(String(null)));
// конкатенация со строкой превращает что угодно в строку
console.log(typeof(5 + "5"));


// Number() превращает в число
console.log(typeof(Number(null)));
// Унарный плюс тоже превращает в число
console.log(typeof(+"5"));
console.log(typeof(parseInt("5.4", 10)));
console.log(typeof(parseFloat("5")));


// to boolean
const False = [0, "", null, undefined, NaN]
// other === true
console.log(typeof(Boolean(null)));
console.log(typeof(!!"444"));