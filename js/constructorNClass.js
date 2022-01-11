'use strict'

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Wa Saaap! My name ${this.name}`)
    }
}

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`)
// }
// const Ivan = new User('Ivan', 28);
// const Alex = new User('Alex', 20)
// console.log(Ivan, Alex)

// Alex.hello();
// Ivan.exit();

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(100, 10);
const div = new ColoredRectangleWithText(10, 10, 'Hello buddy', 'red')
div.showMyProps()
console.log(square.calcArea())