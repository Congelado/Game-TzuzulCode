import { stick, claws } from "./weapons.js";
import { Personajes } from "./Personaje.js";
import { poke133 } from "../asciiPokemons/eevee.js";
import { poke143 } from "../asciiPokemons/snorlax.js";

class Enemigo extends Personajes {
  constructor(vital, stren, def, name, lv, exp, arm, imagen) {
    super(vital, stren, def, name, lv, exp, arm, imagen);
  }
  persar() {
    let ase = 25;
  }
}
const Eevee = new Enemigo(40, 40, 40, "Eevee", 1, 0, claws, poke133[0]);

const Snorlax = new Enemigo(50, 50, 50, "Snorlax", 1, 0, stick, poke143[0]);

export { Eevee, Snorlax };
