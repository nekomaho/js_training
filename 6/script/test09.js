class Member{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(){
    return this.lastName + this.firstName;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    this._lastName = value;
  }
}

let m = new Member('ほげ', '太郎');
console.log(m.getName());
m.firstName = 'のこ'
console.log(m.getName());

class Area {
  static getTriangle(base, height){
    return base * height / 2;
  }
}

console.log(Area.getTriangle(10,2));

class BusinessMember extends Member {
  constructor(firstName, lastName, clazz){
    super(firstName, lastName);
    this.clazz = clazz;
  }

  work() {
    return this.getName() + 'は働いています';
  }

  getName(){
    return super.getName() + this.clazz;
  }
}

b = new BusinessMember('ビジネス', 'パーソン', '課長');
console.log(b.getName());
console.log(b.work());

let member = {
  name: '山田太郎',
  birth: new Date(1970, 5, 25),
  toString() {
    return this.name + ' 誕生日:' + this.birth.toLocaleDateString();
  }
};

console.log(member.toString());

let name = '太郎';
let birth = new Date(1970, 5, 25);
let mem = {name, birth}; //変数と同じメンバ名なら省略可能

console.log(mem.name);
console.log(mem.birth);
