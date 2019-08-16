getTriangle = ({base=1, height=1}) => {
  return base * height / 2;
}

console.log(getTriangle({base:5, height:4}));

function show({name}) {
  console.log(name);
}

let member = {
  mid: 'Y1000',
  name: 'ねこたろう',
  age: 45,
}

show(member);
