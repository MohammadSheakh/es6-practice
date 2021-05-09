function doubleIt(num){
    return num*2;
}
let result = doubleIt(5);
console.log(result);

const doubleit = function(num){
    return num*2;
}
result = doubleit(6);
console.log(result);

////////////  Arrow Function
const doubleItAgain = (num) => num*2 ;
result = doubleItAgain(50);
console.log(result); 

const doubleItAgain2 = (x, y) => x+y ;
result = doubleItAgain2(50, 2);
console.log(result); 


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum*diff;
    return result;
} 
console.log(doMath(1,2));