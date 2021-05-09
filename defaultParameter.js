function add(num1, num2){
    return num1 + num2;
}
let total = add(15, 17);
console.log(total);
//////////////////////////////////////////
function add2(num1, num2){
    if(num2 == undefined)
    {
        num2 = 0;
    }
    return num1 + num2;
}
let total2 = add2(15);
console.log(total2);
//////////////////////////////////////////
function add3(num1, num2){
    num2 = num2 || 1; // number 2 er value hobe .. jodi number 2 deowa thake .. tahole sheta .. nahole 0 dhore nibo 
    return num1 + num2;
}
let total3 = add2(11);
console.log(total3);
///////////////ES6/////////////////////
function add4(num1, num2 = 2){
    // number 2 er value hobe .. jodi number 2 deowa thake .. tahole sheta .. nahole 20 dhore nibo 
    return num1 + num2;
}
let total4 = add2(1);
console.log(total4);