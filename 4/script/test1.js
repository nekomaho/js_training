let str1 = 'にわにはにわにわとりがいる'
console.log(str1.indexOf('にわ'));
console.log(str1.lastIndexOf('にわ'));
console.log(str1.indexOf('にわ', 3));
console.log(str1.lastIndexOf('わ', 5));
console.log(str1.indexOf('ガーデン'));
console.log(str1.startsWith('にわ'));
console.log(str1.endsWith('にわ'));
console.log(str1.includes('にわ'));
console.log(str1.split('わ', 3));

let str2 = 'Wingsプロジェクト';
let str3 = '叱られて';
let str4 = 'wings  ';

console.log(str2.charAt(4));
console.log(str2.slice(5,8));
console.log(str2.substring(5,8));
console.log(str2.substr(5,3));
console.log(str2.split('s'));
console.log(str2.charCodeAt(0));
console.log(str2.concat('有限会社'));
console.log(str2.repeat(2));
console.log(str2.length);

console.log(str3.codePointAt(0));
console.log(String.fromCodePoint(str3.codePointAt(0)));

console.log(str4.trim());

console.log(String.fromCharCode(87, 105, 110, 103));
