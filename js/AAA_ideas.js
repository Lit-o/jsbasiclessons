// рандомайзер возвращает результат включая и min и мах значение. 
// если убрать +1, то верхнее значение не будет включено в ответы
// const randomiser = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// как реализовать, что шанс события произойти 85%?
// это значит, что из 100 ответов 15 ложные, 85 положительные
// нужно сравнивать 2 значения. Первое из рандома, 
// второе статичное, которое как раз заключит логику 85%

// Допустим я загадал 1, условие для этого x = 1 - это шанс 1%
// Допустим я загадал и 1, и 2 условие для этого х <= 2 - это шанс 2%
// Допустим я загадал и 1, и 2, и 3  условие для этого х <= 3 - это шанс 3%

// const random = randomiser(1,100)
// const percent = 50
// const result = random <= percent
// console.log('result ==> ' + result)

// const isGotAChance = (percent) => {
//     const _random = Math.floor(Math.random() * 100) + 1;
//     return _random <= percent
// }

const isChance = percent => (Math.floor(Math.random() * 100) + 1) <= percent

console.log(isChance(90))
