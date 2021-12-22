"use strict"

let num = 20;
function showHello(text) {
    console.log(text);
    let num = 10;
}
showHello("Heeey");
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


const expressFunc = function () {
    console.log("Hello, i am expression func");
};

expressFunc()


const calc2 = (a, b) => {
    return a + b
}
// сокращенная запись если функция только в одну строчку
const calc3 = (a, b) => a + b;
// сокращенная запись если функция только в одну строчку и один аргумент
const calc4 = a => a + 5