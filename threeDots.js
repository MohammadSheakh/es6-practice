const ages = [1, 2, 3];
const ages2 = [4, 5, 6];
const ages3 = [8, 9, 10];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ages, ages2, 5, ages3];
const allAges3 = [...ages, ...ages2, 5, ...ages3]; // current
console.log(allAges); 
console.log(allAges2); 
console.log(allAges3);

const maximum = Math.max(...ages);
console.log("Maximum : " ,maximum);

