console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER + 1)
console.log(Number.MAX_SAFE_INTEGER + 2)

let num1 = 255;
console.log(num1.toString(16));
console.log(num1.toString(8));

let num2 = 123.456789
console.log(num2.toExponential(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(6));

let n = '123xxx'
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

let d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));

console.log(typeof(123 + ''));
console.log(typeof('123' - 0));
