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






