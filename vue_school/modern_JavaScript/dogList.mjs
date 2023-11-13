import fetch from "node-fetch";


function fetchDogs( { breed } ) {
    const dogListApi = "https://dog.ceo/api/breed";
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
