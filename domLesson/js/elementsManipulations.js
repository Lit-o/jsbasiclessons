'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = "blue";
box.style.width = "500px";
let num = 200
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[3].style.borderRadius = "100%";
circles[0].style.backgroundColor = "gold";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "gold"
// } ====> устаревший синтаксис, лучше делать через forEach

hearts.forEach(item => {
    item.style.backgroundColor = "gold"
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут был я') редкий случай

div.classList.add('black');

document.body.append(div);
// устаревший метод .appendChild()
document.querySelector('.wrapper').append(div);

wrapper.prepend(div);
hearts[0].before(div);
hearts[0].after(div);
// устаревший метод insertBefore(div, hearts[0])

circles[0].remove;
// удаляет
// устаревший метод wrapper.removeChild(hearts[1])
// приходится искать через родителя, 
// а .remove() сразу удаляет конкретный элемент
hearts[1].replaceWith(circles[0]);
// hearts[1] удаляется, а на его место вырезается со своего и вставляется circles[0]
// устаревший метод wrapper.replaceChild(circles[0], hearts[1])


div.innerHTML = "<h1>Hello !</h1>";
div.textContent = "Hello";

div.insertAdjacentHTML('', '<h2>Yep</h2>');