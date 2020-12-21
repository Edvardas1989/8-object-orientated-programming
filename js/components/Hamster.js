import { Pet } from './Pet.js';

class Hamster extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva); // super - yra kanalas per kuri pasiekia tevini constructoriu (siuo atveju pet.js).
        this.sound = 'Ham ham'
    }

    introduce() {    
        console.log(`Looks like hamster is too busy to introduce himself...`);
    }
}

export { Hamster }