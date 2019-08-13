'use strict';

let pet = { type: '猫', name: 'ほげ' };

Object.preventExtensions(pet);
//Object.seal(pet);
//Object.freeze(pet);

pet.name = 'ガウ';
delete pet.type;
pet.wight = 50;
