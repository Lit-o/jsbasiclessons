"use strict";

const arr = [3, 4, 5, 6]

// del last item
arr.pop() 
// add item to the end of the array 
arr.push(10)
// del first item
arr.shift()
// add item to the start of the array
arr.unshift(4)


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
for (let element of arr) {
    console.log(element + ' cycle')
}


arr.forEach(function(itemOfArr, i, arr){
    console.log(`${i}: ${itemOfArr} внутри массива ${arr} `)
});
console.log(arr)


const str = "qqqq, aaa, asfas"
const strArr = str.split(", ")
strArr.sort();
const strArrMod = strArr.map(el => el + " yep, this modded; ")
const finString = strArrMod.join(" + ")
console.log(finString)

function compareNum(a, b) {
    return a - b
}
// метод sort внутри себя использует алгоритм быстрой сортировки, поэтому compareNum срабатывает нормально
// http://algolist.ru/sort/quick_sort.php
const numArr = [15, 1, 9, 22, -10]
numArr.sort(compareNum)
console.log(numArr)


