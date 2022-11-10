// task1
// My solution
const digitize = n => ('' + n).split('').reverse().map(e => +e)
// Someone good practice
digitize = n => [...String(n)].map(Number).reverse()

// test alternative split
const spl = 'Abcde'
const splArr = spl.split('')
const splArr2 = [...spl]
console.log(Array.isArray(splArr))
console.log(Array.isArray(splArr2))

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

// other vest solution
function isIsogram2(str) {
  return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}

function isIsogram3(str){
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram4(str){ 
  return !/(\w).*\1/i.test(str)
} 
// In case you put one whitespace in the string, since the capture group (\w) only accepts an alphanumeric character, it returns false. a better approach would be to use (.) for any character instead of (\w).
// --------------------------------------------------------------------------------------------------------------------


// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle
const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle')
console.log(findNeedle(['3', '123124234', undefined, 'needles', 'world', 'hay', 2, '3', true, false]))


// --------------------------------------------------------------------------------------------------------------------
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
const number = arr => arr.map((el,i) => `${i+1}: ${el}`)
console.log(number([]))

// --------------------------------------------------------------------------------------------------------------------
const stringToArray = string => string.split(' ');


// --------------------------------------------------------------------------------------------------------------------
// You're writing code to control your town's traffic lights. You need a 
// function to handle each change from green, to yellow, to red, and then to green again.
const updateLight = current => {
  switch (current){
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
  }
}

// other good solutions
function updateLight(current) {  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]


// --------------------------------------------------------------------------------------------------------------------
// Take an array and remove every second element from the array.
//  Always keep the first element and start removing with the next element.
const removeEveryOther = arr => arr.filter((el, i) => i % 2 === 0)

// other solution in different style
const removeEveryOther2 = arr => arr.filter((_, i) => !(i % 2));


// --------------------------------------------------------------------------------------------------------------------
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
const removeExclamationMarks = s => s.split('').filter(el => el !== '!').join('')

// other solutions
const removeExclamationMarks2 = s => s.replace(/!/g,"") 
const removeExclamationMarks3 = s => s.split('!').join('');


// --------------------------------------------------------------------------------------------------------------------
// Your task is to find the first element of an array that is not consecutive.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
// so that's the first non-consecutive number.

// my first solution

const firstNonConsecutive = arr => {  
  let notConsecutive = null;

  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] + 1) !== arr[i + 1]) {
      return notConsecutive = arr[i + 1]
    }
  }

  return notConsecutive
}

// other solution 
function firstNonConsecutive2(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}
console.log(firstNonConsecutive([1,2,3,4,6,7,8,8,9,10,11,15,16,17]))


// --------------------------------------------------------------------------------------------------------------------
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = (l , w) =>  l === w ? (l * w) : 2 * (l + w)


// --------------------------------------------------------------------------------------------------------------------
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = month => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : month <= 12 ? 4 : null
// other solution
const quarterOf2 = m => Math.ceil(m/3);


// --------------------------------------------------------------------------------------------------------------------
// Create a function with two arguments that will return an array of the first n multiples of x.
const countBy = (x, n) => {
  let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(x * i)
    }  
  return z
}
// other solution
const countBy2 = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
console.log(countBy(5,6))


// --------------------------------------------------------------------------------------------------------------------
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
const rentalCarCost = d => d < 3 ? (40*d) : d < 7 ? (40*d - 20) : (40*d - 50)


// --------------------------------------------------------------------------------------------------------------------
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
const doubleChar = s => {
  const arr = s.split('')
  let newArr = []
  arr.forEach(el => {
    newArr.push(el)
    newArr.push(el)
  })
  return newArr.join('')
} 
// other solution
const doubleChar2 = (str) => str.split("").map(c => c + c).join("");
console.log(doubleChar('samfwq'))


// --------------------------------------------------------------------------------------------------------------------
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = b => b ? 'Yes' : 'No'


// --------------------------------------------------------------------------------------------------------------------
// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array 
// of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block 
// for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function 
// that will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

const isValidWalk = arr => {
  if (arr.length !== 10) {
    return false
  } 
  let currentN = 0
  let currentS = 0
  let currentE = 0
  let currentW = 0

  arr.forEach(el => {
    switch (el) {
      case 'n':
        return currentN += 1;
      case 's':
        return currentS += 1;
      case 'e':
        return currentE += 1;
      case 'w':
        return currentW += 1;
    }   
  })
    
  console.log(currentN + 'n')
  console.log(currentS + 's')
  console.log(currentE + 'e')
  console.log(currentW + 'w')
  console.log('-----------------')

  return (currentN === currentS) && (currentE === currentW)
} 
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))

// other solution
function isValidWalk2(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}


// --------------------------------------------------------------------------------------------------------------------
// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result "is2 Thi1s T4est 3a", "Thi1s is2 3a T4est"
const order = w => {
  if (w.length === 0) {
    return ""
  }

  let arr = w.split(' ')
  let newArr = []
  arr.forEach((el, i, a) => {
    let index = el.match(/\d/)[0]
    newArr[index - 1] = el
  }) 

  console.log(newArr.join(' '))
  return newArr.join(' ')
}

// other solution
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}


// --------------------------------------------------------------------------------------------------------------------
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
const paperwork = (n, m) => n <= 0 || m <= 0 ? 0 : n * m
// other solution
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}


// --------------------------------------------------------------------------------------------------------------------
// another closure practice
const anotherClosure = () => {
  let counter = 0
  const myFunction = () => {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = anotherClosure()
const a1 = increment()
const a2 = increment()
const a3 = increment()
console.log('a', a1, a2, a3)

const increTest = anotherClosure()
const b1 = increTest()
const b2 = increTest()
const b3 = increTest()
const b4 = increTest()
console.log('b', b1, b2, b3)


// --------------------------------------------------------------------------------------------------------------------
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
// any elements with the same value next to each other and preserving the original order of elements.
const uniqueInOrderFirstVer = data => {
  let arr = [...data]
  // console.log(arr)

  let newArr = arr.filter((el,i,ar) => {
    console.log(ar[i+1])
    return el !== ar[i+1]
  })
  return newArr
}
const uniqueInOrder = data => [...data].filter((el, i, ar) => el !== ar[i + 1])
console.log(uniqueInOrder('AAAABBBCCDAABBB'))


// --------------------------------------------------------------------------------------------------------------------
