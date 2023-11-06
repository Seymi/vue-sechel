import fetch from "node-fetch";

fetch("https://swapi.dev/api/people/1/")
    .then(res => res.json())
    .then(json => console.log(json))
;

fetch("https://swapi.dev/api/people/2")
    .then(res => res.json())
    .then(json => console.log(json));



// You forgot to mention some basic prerequisites. You have to install and start selenium and appium to run the actor from quick-start
