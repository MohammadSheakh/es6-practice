const person = {
    name: "mohammad",
    age: 14,
    job : "facebooker",
    address : "Rampura Bazar",
    friends : ["Tom", "Cat", "Mouse"],
} 
//console.log(person.address);
const Address =  person.address;
console.log("Address : ", Address);


const p = person; // tahole pura person ta ekhon p er moddhe chole ashse
//console.log(p);
const {name, job} = person; // person er moddhe name nam e kono property thakle sheta name er moddhe chole ahsbe .. 
console.log("name : ", name);
console.log("Job : ", job);


/////////////////////////   Array Destructure

const cousins = ['Abdullah al rakib', 'panna', 'anna', 'prova', 'nadia'];
const [first, second, ...restCousins] = cousins; 
console.log(first, second, restCousins);