class Person {
    constructor(name) {
        this.setName(name);
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }
}

const admin = new Person('Administrator');
console.log(admin.getName());
admin.setName('Seymi_Admin');
console.log(admin.getName());

//export const new_admin = {name: "Seymi"};

let name = 'Seymi';

const sayHi = name => `My name is ${name}`;

console.log(sayHi('Seymi'));
