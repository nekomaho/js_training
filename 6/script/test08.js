var Wings = Wings || {};

Wings.Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName: function(){
    return this.firstName + ' ' + this.lastName;
  }
};

let name = new Wings.Member('ほげ', '太郎');
console.log(name.getName());

/*
function namespace(ns) {
  var names = ns.split('.');
  var parent = global; // Globalオブジェクト

  for (var i=0, len = names.length; i < len; i++) {
    parent[names[i]] = parent[names[i]] || {};
    parent = parent[names[i]];
  }
  return parent;
}

var my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function(){};
var p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);
*/
