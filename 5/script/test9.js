function sum(...nums) {
  let result = 0;

  for(let num of nums) {
    if (typeof num !== 'number') {
      throw new Error('指定値が数字ではありません:' + num);
    }
    result += num;
  }
  return result;
}

try {
  console.log(sum(1,3,5,7,9));
}catch(e){
  window.alert(e.message);
}
console.log(Math.max.apply(null,[15, -3, 78, 1]));
console.log(Math.max(...[15, -3, 78, 1]));
