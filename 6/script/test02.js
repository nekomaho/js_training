let Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.firstName + ' ' + this.lastName;
};

let mem = new Member('ねこ', '太郎');
console.log(mem.getName());

let Member2 = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member2.prototype = {
  getName: function(){
    return this.firstName + ' ' + this.lastName;
  },
  toString: function(){
    return this.firstName + this.lastName
  }
}

let mem2 = new Member2('ほげ', '太郎');
console.log(mem2.getName());
console.log(mem2.toString());

let Area = function() {};

Area.version = '1.0';
Area.triangle = function(base, height){
  return base * height / 2;
};

Area.diamond = function(width, height){
  return width * height / 2;
};

console.log('バージョン' + Area.version);
console.log('三角面積' + Area.triangle(5,5));
