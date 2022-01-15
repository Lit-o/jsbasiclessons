'use strict';
// array.forEach() не дает новый массив, возвращает только undefined нужен для модификации
import React from "react";
// array.filter() возвращает новый массив
const names = ['Iva', 'Loha2', 'Calabangas'];
const shortNames = names.filter(elem => {
    return elem.length < 6;
})

console.log(shortNames);

const array = ['asdsa', 'Vavalafia']
// array.map()
const answers = ["IvAN", "LOHa", "LoLoLa"];


const result = answers.map(el => el.toLowerCase());
console.log(result);
// let answers2 = ["IvAN", "LOHa", "LoLoLa"];
// answers2 = answers2.map(el => el.toLowerCase());
// console.log(result);


// array.every() / array.some() 
// every вернет true, если все элементы удовлетворяют условиям
// some вернет true, если хотя бы 1 элемент удовлетворяет условиям
const examp1 = [4, 'qwqd', 'gdgsmksmk']

console.log(examp1.some(item => typeof(item) === 'number'))
console.log(examp1.every(item => typeof(item) === 'number'))


// reduce схлопывает, собирает массивы в одно целое
const arr = [4, 5, 1, 5, 5];
                          // 0      4, 5, 1
const result4 = arr.reduce((sum, current) => sum + current);


const arr2 = ['app', 'jija', 'o15ke'];                             //тут можно передать начальное значение sum
const result5 = arr2.reduce((sum, current) => sum + ', ' + current, '3');
console.log(result5)



const obja = {
    iva: 'human',
    lola: 'human',
    chima: 'cat'
};

const newArr = Object.entries(obja.iva)
.filter(item => item[1] === 'human')
.map(el => el[0]);
console.log(newArr);

// Object.entries переводит объект в вид массива
const obj3 = {a: 12, b: 44};
console.log(Object.entries(obj3))
