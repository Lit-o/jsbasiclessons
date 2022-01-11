'use strict'

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this + ' sum log')
        return a + b
    }
    console.log(sum());
}
showThis(4, 7);
// в strict this = undefined, без strict this = window


const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this)
    }
}
obj.sum()
// контекст метода ссылается на сам объект, но только !!! метода !!!, 
// не простого вызова функции даже если он в нутри объекта

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Wa Saaap! My name ${this.name}`)
    }
}

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname)
}

const user = {
    name: 'John'
};

sayName.call(user, "Smith");
sayName.apply(user, ['Smith'])

function count(num) {
    return this*num
}
// 2 зайдет в this
const double = count.bind(2)
console.log(double(5))



const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
    // выдаст <button></button> контест вызова сам элемент на котором произошло событие, по сути как e.target
    this.style.backgroundColor = 'red';
})
// В обработчиках событий если будем применять стрелочную функцию, контекст потеряется, только если func expression
// но в современных реалиях юзают трелочную и e.target
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});


const objArr = {
    num: 5,
    sayNumber: function () {
        // Стрелочная функция всегда обращается к контексту родителя, у нее нет своего контекста
        const say = () => {
            console.log(this);
        };
        say();
    }
}

objArr.sayNumber();


const doubler = a => a * 2;
// сокращенная запись
const doubler2 = (a) => {
    return a * 2;
}