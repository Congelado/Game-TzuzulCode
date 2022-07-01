import { battleAxe, battleKnife, stick } from "./weapons.js";
import { poke004 } from "../asciiPokemons/charmander.js";
import { poke092 } from "../asciiPokemons/gastly.js";
import { poke025 } from "../asciiPokemons/pikachu.js";

class Personajes {
  constructor(vital, stren, def, name, lv, exp, arm, imagen) {
    this.hp = 400 + vital * 2;
    this.vitalidad = vital;
    this.strength = stren;
    this.defense = def;
    this.nombre = name;
    this.level = lv;
    this.experience = exp;
    this.weapon = arm;
    this.img = imagen;
  }

  attack(enemi) {
    let dmg = 0;
    if (this.weapon.crit()) {
      dmg = (
        this.weapon.damage * (0.07 * this.strength) +
        (this.weapon.critDmg / 100) * this.weapon.damage
      ).toFixed(0);
    } else {
      dmg = (this.weapon.damage * (0.07 * this.strength)).toFixed(0);
    }

    return (dmg / (100 / (100 + enemi.defense))).toFixed(0);
  }
  oko(desmayado) {
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(desmayado, "esta fuera de combate");
    }
  }

  levelUp() {
    this.vitalidad += Math.floor(Math.random() * 10);
    this.strength += Math.floor(Math.random() * 10);
    this.defense += Math.floor(Math.random() * 10);
    this.level++;
    this.experience = 0;
    this.hp = 400 + this.vitalidad * 2;
    return void 0;
  }
  mostrarPersonaje() {
    let estadisticas = [
      this.hp,
      this.vitalidad,
      this.strength,
      this.defense,
      this.nombre,
      this.level,
      this.experience,
    ];
    console.table(estadisticas);
    console.table(this.weapon);
    console.log(this.img);
  }
}

const Charmander = new Personajes(
  50,
  40,
  50,
  "Charmander",
  1,
  0,
  stick,
  poke004[0]
);

const Gastly = new Personajes(
  10,
  20,
  20,
  "Gastly",
  1,
  0,
  battleAxe,
  poke092[0]
);

const Pikachu = new Personajes(
  40,
  40,
  40,
  "Pikachu",
  1,
  0,
  battleKnife,
  poke025[0]
);

export { Charmander, Gastly, Pikachu, Personajes };
