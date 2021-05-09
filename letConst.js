const hello = "Boom";

const numbers = [12, 45];
numbers[1] = 4;
console.log(numbers[1]);
numbers.push(12);
console.log(numbers);
//value push kora jabe .. index er value change kora jabe .. 
//kintu data type change kora jabe na ..
// numbers = ["Amar", "Nam"];
console.log(numbers);
const nayok = {
    name:"Sakib Khan",
    phone:4354,
}
nayok.name="boomAgain";
console.log(nayok);

nayok = {
    tax : "121",
}
//eta kora jabe na .. 


for(var i = 0; i  ; i++)
{
    // ei "i" ke baire theke access kora jabe ... 
}

for(let i = 0; i  ; i++)
{
    // ei "i" ke baire theke access kora jabe na ... 
    //let leak hobe na ...
}