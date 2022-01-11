

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Wa Saaap! My name ${this.name}`)
    }
}

const Ivan = new User('Ivan', 28);
const Alex = new User('Alex', 20)
console.log(Ivan, Alex)

Alex.hello()