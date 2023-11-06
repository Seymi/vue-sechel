require("node-fetch");
//import fetch from "node-fetch";


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




//import fetch from "node-fetch";


fetch("https://swapi.dev/api/people/1/")
    .then(res => res.json())
    .then(json => console.log(json))
;

fetch("https://swapi.dev/api/people/2")
    .then(res => res.json())
    .then(json => console.log(json));

