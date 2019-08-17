import MyApp from './component/MyApp';

let app = new MyApp('秘密');

for(let key in app){
  console.log(key);
}

console.log(JSON.stringify(app));
console.log(app.checkValue('秘密'));
