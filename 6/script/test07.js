function Triangle() {
  let _base;
  let _height;

  Object.defineProperty(
    this,
    'base',  // プロパティ名
    {
      get : function(){
        return _base;
      },
      set : function(base){
        if(typeof base === 'number' && base > 0) {
          _base = base;
        }
      }
    }
  );

  Object.defineProperty(
    this,
    'height',
    {
      get : function(){
        return _height;
      },
      set : function(height){
        if(typeof height === 'number' && height> 0) {
          _height = height;
        }
      }
    }
  );
};

Triangle.prototype = {
  getArea : function(){
    return this.base * this.height / 2;
  }
}

let t = new Triangle();

t.base = 10;
t.height = 5;

console.log('面積' + t.getArea());
console.log('高さ' + t.height);
console.log('底辺' + t.base);
