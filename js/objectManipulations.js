"use strict";

const obj = new Object();
// старый синтаксис

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};
options.makeTest();

const {width, height} = options;
console.log(width, height)

delete options.name;

let counter = 0
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`properties ${i} have ${options[key][i]}`);
        }
    } else {
        console.log(`properties ${key} have ${options[key]}`);
        counter++;
    }
}


console.log(options['name'], counter)

console.log(Object.keys(options).length)