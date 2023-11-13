function sum ( ...values) {
    let sum = 0;
    values.forEach(value => ( sum += value ));
    return sum;
};

console.log( sum (1, 2));

console.log( sum (1, 2, 3));
console.log( sum (11,22, 33, 1));

console.log( sum ());


const user = { userName: "Seymi", role: "admin" };

const shoppingList = {
    items: [
        { item: "Milch", priority: "hoch", purchased: false },
        { item: "Eier", priority: "normal", purchased: false },
        { item: "Bananen", priority: "normal", purchased: false },
    ]
}

var shop = {
    shopName: "Billa",
    shopAdress: "Czerningasse"
}

const einkauf = {
    ...user,
    ...shoppingList,
    ...shop
}


shop = {
    shopName: "Spar",
    shopAdress: "Praterstraße"
}

console.log( einkauf );



function fetchDogs( { breed } ) {
    const dogListApi = "https://dog.ceo/dog-api/breeds-list";
    fetch(`${dogListApi}/${breed}/images`)
        .then ( response => response.json() )
        .then ( data => console.log(data))
        .catch ( console.error());
}

const dog = {
    name: "Max",
    breed: "labrador",
    color: "brown",
    age: 8
};


fetchDogs(dog);
