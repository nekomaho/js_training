let ary1=['Sato','Takae','Osada','Hio','Saitoh','Sato'];
let ary2=['Yabuki','Aoki','Moriyama','Yamada'];

console.log(ary1.length);
console.log(Array.isArray(ary1));
console.log(ary1.toString());
console.log(ary1.indexOf('Sato'));
console.log(ary1.lastIndexOf('Sato'));

console.log(ary1.concat(ary2));
console.log(ary1.join('/'));
console.log(ary1.slice(1));
console.log(ary1.slice(1,2));
console.log(ary1.splice(1,2,'Kakeya','Yamaguch')); //1番目から後ろ2つの要素(つまり2、3番目の要素)を置き換える
console.log(ary1);

console.log(Array.of(20, 40, 60));
console.log(ary1.copyWithin(1, 3, 5));
console.log(ary1);

console.log(ary2.fill('Suzuki', 1, 3));
console.log(ary2);

console.log(ary1.pop());
console.log(ary1);

console.log(ary1.push('Kondo'));
console.log(ary1);

console.log(ary1.shift());
console.log(ary1);

console.log(ary1.unshift('Ozawa', 'Kuge'));
console.log(ary1);

console.log(ary1.reverse());
console.log(ary1);

console.log(ary1.sort());
console.log(ary1);

let data = [2, 3, 4, 5];
data.forEach(function(value, index, array){
  console.log(value * value);
});

let data2 = [2, 3, 4, 5];
let result = data2.map(function(value, index, array){
  return value * index
});
console.log(result);

let data3 = [4, 9, 16, 25];
result = data3.some(function(value, index, array){
  return value % 3 === 0;
});
console.log(result);

let data4 = [4, 9, 16, 25];
result = data4.filter(function(value, index, array){
  return value % 2 === 0;
})
console.log(result);

let classes = ['部長', '課長', '主任', '担当'];
let members = [
  {name: '鈴木その子', clazz: '主任'},
  {name: '山口勝平', clazz: '部長'},
  {name: '井上太郎', clazz: '担当'},
  {name: '和田ちえみ', clazz: '課長'},
  {name: '小森悠太', clazz: '担当'},
]
console.log(members.sort(function(x,y){
  return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}))


