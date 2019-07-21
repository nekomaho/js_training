const TAX=1.08
let msg='Hello 世界';
let x = 10;
window.alert(msg);
console.log(x*TAX);
console.log('He\'s Hello');

let new_msg='こんにちは\n 猫さん';
window.alert(new_msg);

let temp_str=`${msg}
本当にいいね`;
console.log(temp_str);

let animal = ['猫','犬','豚'];
console.log(animal[0]);

let second_animal = ['猫',['犬'],'豚'];
console.log(animal[1][0]);

let hoge_hash = {x:1, y:2, z:3}
console.log(hoge_hash.x);
console.log(hoge_hash['y']);
console.log(hoge_hash.z);
console.log(hoge_hash.b);

let hugahuga = [1,2,3,4]
let [one, two, three, four] = hugahuga;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

let {x:first, y, z} = hoge_hash;
console.log(first);
console.log(y);
console.log(z);
