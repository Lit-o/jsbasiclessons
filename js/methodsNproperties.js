"use strict"

const str = "Test";
console.log(str);
console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fullName = "Ivan Ivaqnchov Braqga";
console.log(fullName.indexOf("q"));
console.log(fullName.includes('q'));

const logg = "Yep yep dude";
console.log(logg.slice(-4,-1));
console.log(logg.substring(4, 1));
// возможны проблемы с поддержкой substr
console.log(logg.substr(4, 3));

const num = 12.3;
console.log(Math.round(num))

const numFromString = "14.2px";
// без дроби
console.log(parseInt(numFromString));
// с дробью
console.log(parseFloat(numFromString));

