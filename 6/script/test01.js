let Member = function(firstName, lastName) {
  //Member(firstName,lastName)で呼ばれてしまった場合にコンストラクタが実行されない問題を防ぐ
  if(!(this instanceof Member)) {
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function() {
    return this.firstName + ' ' + this.lastName;
  }
}

let member = new Member('ねこ', 'ひろし');
console.log(member.getName());


let member2 = new Member('たこ', 'ひろし');
member2.getFirstName = function(){
  return this.firstName;
}

console.log(member2.getFirstName());

data = 'GlobalObject';
let obj1 = {data: 'obj1 data'};
let obj2 = {data: 'obj2 data'};

function hoge() {
  console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);


function argumentsGetter(){
  let args = Array.prototype.slice.call(arguments);
  console.log(args.join('/'));
}

argumentsGetter('ねこ', 'いぬ', 'しまうま');
