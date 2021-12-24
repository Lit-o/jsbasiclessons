"use strict"

let a = 5,
    b = a;
b = b + 5;
console.log(a, b)


const obj = {
    a: 5,
    b: 1
}
const copy = obj;
copy.a = 10
console.log(copy.a, obj.a)

function copyObj(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 4,
        y: 3
    }
}

// const newNum = copyObj(numbers)
// console.log(newNum)
const add = {
    d:17,
    e: 11
};
console.log(Object.assign(numbers, add));
// как бы создаем копию, в пустой объект добавляем объект add
console.log(Object.assign({}, add));


const oldArray = ['a', 'b']
const newArray = oldArray.slice()


// Оператор разворота, spread оператор в ES6 для массивов, а в ES9 и для объектов, 
// хотя изначально вводить начали в ES8
// разворачивает объект в структуру данных
const video = ['youtube', 'vimeo', 'other'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk'];

console.log(internet)


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 6, 3];
log(...num)
// применяем массив как аргументы с помощью spread


// поверхностная копия с помощью spread
const array = ['a', 'b', 'c']
const newestArray = [...array]


const q = {
    one: 1,
    two: 2
}

const newQ = {...q};
