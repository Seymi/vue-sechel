import fetch from "node-fetch";

const base_url = 'https://swapi.dev/api'

const requestRoute = 'people'



fetch(`${base_url}/${requestRoute}/2`)
    .then(res => res.json())
    .then(json => console.log(json))
;

/*
fetch("https://swapi.dev/api/people/2")
    .then(res => res.json())
    .then(json => console.log(json));
*/





// You forgot to mention some basic prerequisites. You have to install and start selenium and appium to run the actor from quick-start
