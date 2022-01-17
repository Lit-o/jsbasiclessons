'use strict';

// Web API localStorage

// записываю данные в локальное хранилище, которое работает только с одним доменом
localStorage.setItem('whatIwantKey', 'myValueStringOrNumOrJSON');

// считываю данные из локального хранилища под нужным ключем
localStorage.getItem('whatIwantKey');

// удаление одного Итема
localStorage.removeItem('whatIwantKey')

// очищаю локальное хранилище полностью
localStorage.clear();


const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('#form');
const change = document.querySelector('#change');

if (localStorage.getItem('check')) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
    form.getElementsByClassName.backgroundColor = 'white';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('check', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        // localStorage.removeItem('bg')
        localStorage.setItem('bg', '');
        form.getElementsByClassName.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.getElementsByClassName.backgroundColor = 'gold'; 
    }
});


const persone = {
    name: 'Shone',
    age: 24
};
// сохранять объект в localStoragge в изначальном виде нельзя
// он превратиться в string [object Object], 
// для хранения объект нужно перевести в JSON
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);