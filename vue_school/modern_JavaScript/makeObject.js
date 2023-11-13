function makeObject(key, value) {
    return { [key]: value };
}

const user = makeObject ( "name", "Seymi" );
const haustier = makeObject ( "Tier", "Hund" );

console.log(user);
console.log(haustier);


const extraField1 = "fettgehalt";

const person = {
    name: "Seymi",
    alter: 58,
    groesse: 178,
    gewicht: 76.9,
    [extraField1]: 16.9
}

console.log(person);


var MyList = [];

function addListItem( item, list = []) {
    list.push(item);
    return list;
}


console.log(addListItem("Milch", MyList ));
console.log(addListItem("Eier", MyList));
console.log(addListItem("Bananen", MyList));

