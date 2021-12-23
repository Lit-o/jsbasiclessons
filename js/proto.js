"use strict"

const unit = {
    health: 400,
    armor: 100,
    weight: 50,
    sayHello: function () {
        console.log('Hello!')
    }
}

const unitOne = {
    health: 350
}

// устаревший формат, сейчас нужно Object.create Object.getPrototypeOf Object.setPrototypeOf
// unitOne.__proto__ = unit;
Object.setPrototypeOf(unitOne, unit)


console.log(unitOne.armor)
unitOne.sayHello()


const unitTwo = Object.create(unit)
unitTwo.sayHello()