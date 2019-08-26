let storage = sessionStorage;
storage.setItem('fruit1','みかん');
storage.fruit2 = 'りんご';
storage['fruit3'] = 'ぶどう';

console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);