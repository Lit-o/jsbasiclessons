'use strict';
// array.forEach() не дает новый массив, возвращает только undefined нужен для модификации

// array.filter() возвращает новый массив
const names = ['Iva', 'Loha2', 'Calabangas'];
const shortNames = names.filter(elem => {
    return elem.length < 6;
})

console.log(shortNames);


// array.map()

const answers = ["IvAN", "LOHa", "LoLoLa"];

const result = answers.map(el => el.toLowerCase());
console.log(result);


let answers2 = ["IvAN", "LOHa", "LoLoLa"];
answers2 = answers2.map(el => el.toLowerCase());
console.log(result);