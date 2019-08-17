const AUTHOR = 'nekomaho';

export class Member{
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

export class Area {
  static getTriangle(base, height){
    return base * height / 2;
  }
}
