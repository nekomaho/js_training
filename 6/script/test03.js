let Animal = function(){};

Animal.prototype = {
  walk: function(){
    console.log('トコトコ');
  }
};

let Dog = function(){
  Animal.call(this); //Animalのコンストラクタを呼んでいる
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log('わんわん');
};

let d = new Dog();

d.walk();
d.bark();
