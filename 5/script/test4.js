let scope = 'Global'

function getValue() {
  let scope = 'Local'
  return scope
}

console.log(getValue());
console.log(scope);
