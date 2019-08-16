function closer(init) {
  let count = init;

  return function() {
    return ++count;
  }
}

let myCloser = closer(1);
console.log(myCloser());
console.log(myCloser());
console.log(myCloser());
