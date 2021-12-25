'use strict';

const box = document.getElementById('box');
console.log(box);

// получаем псевдомассив с элементами
const buttons = document.getElementsByTagName('button');
const button3 = document.getElementsByTagName('button')[3];
console.log(buttons);

const circles = document.getElementsByClassName('circle');


// современные методы

const hearts = document.querySelectorAll('.heart')
hearts.forEach(item => {
    console.log(item)
})
console.log(hearts);

const heart = document.querySelector('.heart')
console.log(heart);