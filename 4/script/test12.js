console.log(isNaN('hoge'));
console.log(Number.isNaN('hoge'));

let str='!"#$%&()+*/@~_|::,.';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

let execStr='console.log("eval関数")';
eval(execStr);
