let x = 0;
while(x < 10){
  console.log(x);
  x++;
}

x = 0;
do{
  console.log("do" + x);
  x++;
}while(x < 10);

for(let i=0; i < 10; i++){
  console.log(i);
}

let values = { cat: 5000, dog: 1000, pig: 1500 };
for(let key in values){
  console.log(key + values[key]);
}

let array = ['neko','inu','buta']
for(let key of array){
  console.log(key);
}
