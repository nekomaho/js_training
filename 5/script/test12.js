function factoria(n) {
  if(n != 0) { return n * factoria(n-1); }
  return 1;
}

console.log(factoria(5));

function arrayWalk(data, f) {
  for(let key in data){
    f(data[key], key);
  }
}

showElement = (value, key) => {
  console.log(key + ':' + value);
}

arrayWalk([1,3,4,5],showElement);

var result = 0;
sumElement = (value, key) => {
  result += value;
}

arrayWalk([1,3,4,5],sumElement);
console.log(result);

arrayWalk(
  [1,3,4,5],
  function(value, key){
    console.log(key + ':' + value);
  }
)
