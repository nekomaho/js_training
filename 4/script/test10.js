let obj = new Object();
console.log(obj.toString());
console.log(obj.valueOf());

let dat = new Date();
console.log(dat.toString());
console.log(dat.valueOf());

let ary = ['js', 'C', 'ruby'];
console.log(ary.toString());
console.log(ary.valueOf());

let pet = {
  type: 'ハムスタ',
  name: '猫',
  description: {
    birth: '2019-10-1'
  }
}

let pet2 = {
  name: '猫',
  color: '茶トラ',
  description: {
    food: 'カルカン'
  },
}

let pet3 = {
  wight: 45,
  photo: 'hogehoghoe.com',
}

Object.assign(pet, pet2, pet3)
console.log(pet);


let obj3 = {x:1, y:2, z:3};
let obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

let obj4 = Object.create(Object.prototype, {
  x: {value: 1, writable: true, configurable: true, enumerable: true},
  y: {value: 2, writable: true, configurable: true, enumerable: true},
  z: {value: 3, writable: true, configurable: true, enumerable: true},
});
console.log(obj3);
console.log(obj2);
console.log(obj4);

