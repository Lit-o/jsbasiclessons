'use strict';

const persone = {
    name: "Alex'n",
    tel: "+8213199900",
    parents: {
        m: "Selesta",
        d: "Bob"
    }
}

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

// можно делать глубокую копию с помощью JSON
const clone = JSON.parse(JSON.stringify(persone));


