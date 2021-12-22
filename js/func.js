"use strict"

let num = 20;
function showHelloDeclarationFunc(text) {
    console.log(text);
    let num = 10;
}
showHelloDeclarationFunc("Heeey");
console.log(num);


function calc(x) {
    return (x*x);
}
console.log(calc(4));


function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();


const expressionFunc = function () {
    console.log("Hello, i am expression func");
};
expressionFunc()


const calc2 = (a, b) => {
    return a + b
}
// сокращенная запись, если функция только в одну строчку
const calc3 = (a, b) => a + b;
// сокращенная запись, если функция только в одну строчку и один аргумент
const calc4 = a => a + 5

// сокращенная запись, если функция возвращает литеральное выражение объекта
// Остаточные параметры параметры по умолчанию и Деструктуризация поддерживаются
const calc5 = (param1, param2 = 2, [a, b] = [1, 2], {x: c} = {x: a + b}, ...restPar) => ({foo: "bar"})