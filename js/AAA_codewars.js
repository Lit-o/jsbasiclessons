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



// You are going to be given a word. Your job is to return the middle character of the word. If the word's
// length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// My first solution
const getMiddleFirst = s => {
  if (s.length % 2 === 0) {
    return s.slice(s.length/2-1, s.length/2+1)
  } else {
    return s.slice(s.length/2, s.length/2+1)
  }
}
// My best for this moment solution
const getMiddle = s => (s.length % 2 === 0) ? s.slice(s.length/2-1, s.length/2+1) : s.slice(s.length/2, s.length/2+1)
// Other intresting solution
function getMiddleOther(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
// ------------------------------------------------------------------------



// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.
// My first solution
const reverseWordsFirst = str => {
  const words = str.split(' ')
  const mirror = words.map(word => {
    return word.split('').reverse().join('')
  })
  return mirror.join(' ')
}
// My best for this moment solution
const reverseWords = str => str.split(' ').map(w => w.split('').reverse().join('')).join(' ')
// Other intresting solution
var reverseWordsOther=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
// ------------------------------------------------------------------------



// Very simple, given an integer or a floating-point number, find its opposite. 
// My first and best for this moment solution
const opposite = n => (('' + n)[0] === "-") ? +('' + n).slice(1) : +('-' + n)

// Truly other best solution 
const oppositeOther = n => -n;
// ------------------------------------------------------------------------



// Return an array, where the first element is the count of positives numbers and the 
// second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// My first solution
const countPositivesSumNegatives = a => {
  if (a === null) {return []}
  let sumN = 0, countP = 0;
  a.forEach(i => {
    if (i < 0) {
      sumN += i 
    } else if (i > 0) {
      countP += 1
      // countP++
    }
  })
  if (sumN === 0 && countP === 0) {return []}
  return [countP, sumN]
}
// Good other solutions
function countPositivesSumNegatives2(input) {
  if (input == null || input.length == 0)
    return [];  
  var positive = 0;
  var negative = 0;  
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }  
  return [positive, negative];
}
function countPositivesSumNegatives3(input) {
  return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

// --------------------------------------------------------------------------------------------------------------------
// scope practice
let scopeTest = 1;

function scopeTestFunc () {
  let scopeTest = 0;
  scopeTest = scopeTest + 1
  console.log(scopeTest)
}

scopeTestFunc()
scopeTestFunc()
scopeTestFunc()

//  CLOSURE PRACTICE --- CLOSURE PRACTICE --- CLOSURE PRACTICE --- CLOSURE PRACTICE
function scopeTestClosureFunc () {
  let scopeTest = 0;
  let scopeTestInnerFunc = () => {
    let x = 10
    x = x + 1
    console.log(x)
    scopeTest += 1
    return scopeTest
  }
  return scopeTestInnerFunc
}

let ChildFuncWithClosure = scopeTestClosureFunc() 
// ChildFuncWithClosure - link, hub which make Closure state save
// scopeTestClosureFunc()() - just run, give another func which again run and after that scope clear

console.log(ChildFuncWithClosure()) //run, parent fantom scope (scopeTest) update and save, local state (x) clear
console.log(ChildFuncWithClosure()) //run, parent fantom scope (scopeTest) update and save, local state (x) clear
console.log(ChildFuncWithClosure()) //run, parent fantom scope (scopeTest) update and save, local state (x) clear
console.log(scopeTestClosureFunc()()) // run, return func, which run and return 1, clear scope
console.log(scopeTestClosureFunc()()) // run, return func, which run and return 1, clear scope
// --------------------------------------------------------------------------------------------------------------------


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// my solution
const Banjo = (name) => {
  return (name[0] === 'R' || name[0] === 'r') ? `${name} plays banjo` : `${name} does not play banjo`
}
const Banjo2 = name => (name[0] === 'R' || name[0] === 'r') ? `${name} plays banjo` : `${name} does not play banjo`
console.log(Banjo2('Roman'))

// other best solution
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}
// --------------------------------------------------------------------------------------------------------------------

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

const isIsogramFirstVer = word => {
  const wordToArr = word.toLowerCase().split('');
  const localArr = [...wordToArr]
  let isIsogram = true

  for (let i = 0; i < wordToArr.length - 1; i++) {    
    const current = localArr[0]
    localArr.splice(0, 1)  
    // const match = localArr.some(el => current === el)
    if (localArr.some(el => current === el)) {
      isIsogram = false
    }
    console.log(current) 
    console.log(localArr)
    console.log(isIsogram)   
    console.log('----------')  
  }

  return isIsogram 
}

console.log(isIsogramFirstVer('123454'))


const isIsogram = word => {
  const wordToArr = word.toLowerCase().split('');
  const length = wordToArr.length

  let isIsogram = true

  for (let i = 0; i < length - 1; i++) {    
    const current = wordToArr[0]
    wordToArr.splice(0, 1)  
    if (wordToArr.some(el => current === el)) {
      isIsogram = false
    }
  }

  return isIsogram 
}

console.log(isIsogram('123455'))