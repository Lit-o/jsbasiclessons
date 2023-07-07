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

// Smart way to truncate long strings
// есть 3 метода для получения подстроки: substring, substr и slice:

// str.slice(start [, end]) Возвращает часть строки от start до (не включая) end.
// Если аргумент end отсутствует, slice возвращает символы до конца строки:
// Также для start/end можно задавать отрицательные значения. Это означает, 
// что позиция определена как заданное количество символов с конца строки

// str.substring(start [, end])
// Возвращает часть строки между start и end (не включая) end.
// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.
// Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0.

// str.substr(start [, length])

let string = "Ivan Ivaqnchov Braqga";
// Обрезыватель текста, чего уж тут говорить...
const textCutter = (text, cutPoint) => {
  if (text.length > cutPoint) {
    return text.slice(0, cutPoint-1) + '...'
  }
  return text
}

// subString.slice(0, subString.lastIndexOf(" "))