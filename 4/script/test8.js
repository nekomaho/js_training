let date = new Date(2016, 11, 25, 11, 37, 15, 999);

console.log(date);
console.log(date.getFullYear());
console.log(date.getTime());

let date2 = new Date();
console.log(date2);
console.log(date2.getFullYear());

console.log(Date.now());

let date3 = new Date(2017, 4, 15);
let date4 = new Date(2017, 5, 20);

let diff = Math.abs(date3.getTime() - date4.getTime()) / (1000* 60 * 60 * 24)
console.log(diff +  '日の差があります');
