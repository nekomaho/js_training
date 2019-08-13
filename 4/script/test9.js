let p = /^[0-9]{1,}/gm;
let one = '101匹のワンちゃん。\n7人の小人';
one.match(p).forEach(function(val, idx, result){
  console.log(val);
});
console.log(p.test(one));

let str = '𠮟ります';
console.log(str.match(/^.ります$/gu));
