'use strict';

const persone = {
    name: "Alex'n",
    tel: "+8213199900"
}

console.log(JSON.stringify(persone));

console.log(JSON.parse(JSON.stringify(persone)));