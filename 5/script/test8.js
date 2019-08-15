function getTriangle(base=1, height=1) {
  return base * height / 2;
}

console.log('三角形の面積:' + getTriangle());
console.log('三角形の面積:' + getTriangle(2, undefined));
console.log('三角形の面積:' + getTriangle(10));

show = (x, y=1) => {
  console.log('x=' + x);
  console.log('y=' + y);
};

show();

function required() {
  throw new Error('引数が不足しています');
}

function hoge(value = required()) {
  return value;
}

hoge();
