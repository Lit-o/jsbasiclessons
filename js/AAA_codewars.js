// task1
// My solution
const digitize = n => ('' + n).split('').reverse().map(e => +e)
// Someone good practice
digitize = n => [...String(n)].map(Number).reverse()


// task2
const friend = friends => friends.filter(el => el.length === 4);

for (let j = 0; j <= i; j++) {
  const arr = []
  if (j = 0) { arr.j = el.toUpperCase() }
  else (arr.j = el)
}
console.log([])

// my solution
accum = s => {
  return [...s.toLowerCase()].map((el, i) => {
    const arr = []
    for (let j = 0; j <= i; j++) {
      arr[j]=el 
    }
    arr[0] = arr[0].toUpperCase()
    return arr.join('')
  }).join('-')
}
console.log(accum('dSfYtZY'))
// best practice
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
// -----------------------------------------------------------------------------------------------



// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// my solution
function getCount(str) {
  var vowelsCount = 0;
  var arr = str.split('');
  return vowelsCount = arr.filter(l => l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u').length;
}
console.log(getCount('aabracedabra'));
// best solution
function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }
// ------------------------------------------------------------------------



function litres(time) {  
  return Math.floor(time * 0.5);
}

// Math.round() - rounds to the nearest integer.
// Math.floor() - rounds down towards negative infinity.
// Math.ceil() - rounds up towards positive infinity.
// parseInt()
// ------------------------------------------------------------------------



function removeSmallest(numbers) {
  let min = numbers[0];
  let minIndex = 0
  for (let i = 1; i < numbers.length; i++ ) {
    if (numbers[i] < min) {
      min = numbers[i]
      minIndex = i
    }
  }
  numbers.splice(minIndex, 1)
  return numbers
}
// removeSmallest([4,5,2,1,2,1])
console.log(removeSmallest([4,-1,5,2,1,2,1]))

// let arra = [1,2,3,4,5]
// // arra.splice(0,2)
// let r = arra.splice(0,2)
// console.log(arra)
// console.log(r)
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
// ------------------------------------------------------------------------



// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
const check = (a, x) => a.some(el => el === x)
// other solution
const check2 = (a,x) => a.includes(x);
// ------------------------------------------------------------------------



// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
const countSheeps = arrayOfSheep => arrayOfSheep.filter(el => el === true).length
let countSheeps2 = x => x.filter( s => s ).length;
// ------------------------------------------------------------------------



// Write a program that finds the summation of every 
// number from 1 to num. The number will always be a positive integer greater than 0.
const summation = num => {
  let sum = 1
  if (num > 1) {
    for(let i = 2; i <= num; i++) {
      sum+=i
    }    
  }
  return sum
}
// other solution
var summation2 = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }  
  return result;
}

function summation3(num) {
  return num * (num + 1) / 2
}
// ------------------------------------------------------------------------


// Your task is to create a function that does four basic mathematical operations.
const basicOp = (operation, a, b) => {
  switch (operation) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      default:
        return null;
  }
}
console.log(basicOp("+", 4, 12))
// other solution
function basicOp2(o, a, b) {
  return eval(a+o+b);
}

function basicOp3(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

function basicOp3(operation, value1, value2) {
  return  operation == '+' ? value1 + value2 :
          operation == '-' ? value1 - value2 :
          operation == '*' ? value1 * value2 :
          operation == '/' ? value1 / value2 : 'Wrong Operation';
}
// ------------------------------------------------------------------------



// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) 
// that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
const min = list => list.sort((a, b) => b - a)[list.length - 1]
const max = list => list.sort((a, b) => a - b)[list.length - 1]

const max1 = list => list.sort((a, b) => b - a)[0]
const min1 = list => list.sort((a, b) => a - b)[0]
// other solution
const min2= (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);
// ------------------------------------------------------------------------


