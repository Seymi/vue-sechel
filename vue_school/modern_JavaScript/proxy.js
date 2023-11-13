var firstname = "Martin";
var lastname = "Seymann";

const data = {
    firstname,
    lastname,
    fullname() { return this.firstname + " " + this.lastname }
};

console.log( data);
console.log( data.fullname());

const handler = {
    set ( target, key, value ) {
        console.log(target);
        console.log(key);
        console.log(value);
        if (key === 'firstname') {
            target.firstname = value;
        };
        if (key === 'lastname') {
            target.lastname = value;
        }
    }
}



const proxy = new Proxy(data, handler);
proxy.firstname = "Karl";
proxy.lastname = "Seymi";

//firstname = "Karl";

console.log( data);
console.log( data.fullname());

/*
Robert Greene, Mastery (2012)
"You have a kind of inner force that seeks to guide you towards your life's task, which you're meant to accomplish in the time that you have to live".
*/

/*
Rebecca Wirfs-Brock, Object Design
https://www.amazon.com/gp/product/0201379430
*/
