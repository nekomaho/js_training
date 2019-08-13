let rank = 'B'

switch(rank) {
  case 'A':
    console.log('rank A');
    break;
  case'B':
    console.log('rank B');
    break;
  case 'C':
    console.log('rank C');
    break;
  case 'D':
    console.log('rank D');
    break;
  default:
    console.log('out of rank');
    break;
}

switch(rank) {
  case 'A':
  case 'B':
  case 'C':
    console.log('合格');
    break;
  case 'D':
  default:
    console.log('不合格')
}
