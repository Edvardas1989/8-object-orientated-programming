//  objektas - funkcionalumo ir parametru rinkinys.

/*
Animal.js (params: name, color, sound; methods: voice(), introduce();)
    Pet.js (viska paveldi is Animal.js)
        Dog.js (viska paveldi is Pet.js)
        Cat.js (viska paveldi is Pet.js)
        Hamster.js (viska paveldi is Pet.js; params: canEatTillDeath)


    Bird.js  (viska paveldi is Animal.js; params: nwingsCount, canFly; methods: flyAway();)
        Chicken.js  (viska paveldi is Bird.js)
        Parrot.js  (viska paveldi is Bird.js)
        Eagle.js   (viska paveldi is Bird.js)
        Dragonfly.js  (viska paveldi is Bird.js; params: imposter=true;)

    Fish.js (viska paveldi is Animal.js; params: canSwim; methods: swimAway();)
        Goldfish.js (viska paveldi is Fish.js params: grantsWishes; methods: makeWish();)
        Nemo.js (viska paveldi is Fish.js)

*/

import { Dog } from './components/Dog.js'
import { Cat } from './components/Cat.js'
import { Hamster } from './components/Hamster.js'

const rexas = new Dog('Rexas', 'brown');
// const spike = new Dog('Spike', 'white');
// const lese = new Dog('Lese', 'golden');


// console.log(rexas);
// console.log(rexas.name);
// console.log(rexas.color);

rexas.introduce();
// lese.voice();


const rainis = new Cat('Rainis', 'brown');
// const pukis = new Cat('Pukis', 'white');

// console.log(rainis);
// console.log(rainis.name);
// console.log(rainis.color);

rainis.introduce();
// pukis.voice();

const cipsas = new Hamster('Cipsas', 'golden');
cipsas.introduce();