/*
function sayHi(name) {
    return "Hi " + name;
}

function sayHello(name) {
    return `Hello ${name}`;
}

const sagHallo = (name) => `Hallo ${name}`;

console.log(sayHi('Seymi'));
console.log(sayHello('Martin'));

console.log(sagHallo('Chaim'));


const result =
`Erster = 1
Zweiter = 2`;

console.log(result);
*/

const greet = (name, age, size, weight) => {
    console.log(name);
    console.log(age);
    console.log(size);
    console.log(weight);
}


const nickname = "Seymi";
const size = 178;
var alter = 58;
var gewicht = 77;

greet `My name is ${nickname} and my size is ${size}`;

greet `meine Größe ${size} mein Gewicht ${gewicht}`;
