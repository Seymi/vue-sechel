function getInfo(name, age) {
    return `Name: ${name} - Age: ${age}`;
}

console.log(getInfo("Seymi", 58));

const getInfo2 = (name, age) => `Name: ${name} - Age: ${age}`;

//console.log(getInfo2('Martin', 58, 178));
console.log(getInfo2("Martin", 58, 178));


var radius = 5;
const shape = {
    radius: 10,
    diameter: function() {
        return this.radius * 2
    },
    diameter2: () => radius * 2
}

console.log('diameter : ', shape.diameter());
console.log('diameter2: ', shape.diameter2());


const hero = {
    name: 'Seymi',
    greet: function() {
        console.log('Hallo', this.name);
    },
    greet2: () => console.log('Hallo', hero.name),
    greet3: function() {
        setTimeout( function() { console.log('Hallo', this.name)}.bind(this), 1 );
    },
    greet4: function() {
        setTimeout( () => { console.log('Hallo', this.name) }, 1000 );
    },
    // same like greet4
    greet5: function() {
        setTimeout( () => console.log('Hallo', this.name), 1000 );
    }

}

hero.greet();
hero.greet2();
hero.greet3();
hero.greet4();
hero.greet5();
