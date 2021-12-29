'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
let height = box.clientHeight;

const width2 = box.offsetWidth;
const height2 = box.offsetHeight;

const width3 = box.scrollWidth;
const height3 = box.scrollHeight;

btn.addEventListener('click', () => {
    // box.style.height = height3 + "px";
    console.log(box.scrollTop);
    window.scrollTo(0, 100);
});

console.log(box.getBoundingClientRect().top);

// можем получить стили элементов и их псевдоэлементов полученные от CSS
const computed = window.getComputedStyle(box);
console.log(computed.display)

console.log(document.documentElement.clientWidth)

// скроллит от текущего положения куда надо
window.scrollBy(0, 400);